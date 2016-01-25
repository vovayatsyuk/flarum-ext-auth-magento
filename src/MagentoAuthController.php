<?php

namespace Vovayatsyuk\Auth\Magento;

use Flarum\Forum\Controller\AuthenticateUserTrait;
use Flarum\Forum\UrlGenerator;
use Flarum\Http\Controller\ControllerInterface;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Bus\Dispatcher;
use League\OAuth1\Client\Server\Magento;
use Psr\Http\Message\ServerRequestInterface as Request;
use Zend\Diactoros\Response\RedirectResponse;

class MagentoAuthController implements ControllerInterface
{
    use AuthenticateUserTrait;

    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    /**
     * @var UrlGenerator
     */
    protected $url;

    /**
     * @param SettingsRepositoryInterface $settings
     * @param UrlGenerator $url
     * @param Dispatcher $bus
     */
    public function __construct(SettingsRepositoryInterface $settings, UrlGenerator $url, Dispatcher $bus)
    {
        $this->settings = $settings;
        $this->url = $url;
        $this->bus = $bus;
    }

    /**
     * @param Request $request
     * @param array $routeParams
     * @return \Psr\Http\Message\ResponseInterface|RedirectResponse
     */
    public function handle(Request $request, array $routeParams = [])
    {
        session_start();

        $server = new Magento(array(
            'host'         => $this->settings->get('vovayatsyuk-auth-magento.store_url'),
            'identifier'   => $this->settings->get('vovayatsyuk-auth-magento.api_key'),
            'secret'       => $this->settings->get('vovayatsyuk-auth-magento.api_secret'),
            'callback_uri' => $this->url->toRoute('auth.magento')
        ));

        if (! isset($_GET['oauth_token']) || ! isset($_GET['oauth_verifier'])) {
            $temporaryCredentials = $server->getTemporaryCredentials();

            $_SESSION['temporary_credentials'] = serialize($temporaryCredentials);
            session_write_close();

            // Second part of OAuth 1.0 authentication is to redirect the
            // resource owner to the login screen on the server.
            $server->authorize($temporaryCredentials);
            exit;
        }

        // Retrieve the temporary credentials we saved before
        $temporaryCredentials = unserialize($_SESSION['temporary_credentials']);

        // We will now retrieve token credentials from the server
        $tokenCredentials = $server->getTokenCredentials(
            $temporaryCredentials,
            $_GET['oauth_token'],
            $_GET['oauth_verifier']
        );

        $user = $server->getUserDetails($tokenCredentials);
        $email = $user->email;
        $username = preg_replace(
            '/[^a-z0-9-_]/i',
            '',
            $user->firstName . $user->lastName
        );

        return $this->authenticate(compact('email'), compact('username'));
    }
}
