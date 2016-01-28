<?php

namespace Vovayatsyuk\Auth\Magento\Listener;

use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Event\PrepareApiAttributes;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Events\Dispatcher;

class AddApiAttributes
{
    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    /**
     * @param SettingsRepositoryInterface $settings
     */
    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    /**
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        $events->listen(PrepareApiAttributes::class, [$this, 'prepareApiAttributes']);
    }

    /**
     * @param PrepareApiAttributes $event
     */
    public function prepareApiAttributes(PrepareApiAttributes $event)
    {
        if ($event->isSerializer(ForumSerializer::class)) {
            $attributes = array(
                'vovayatsyuk-auth-magento' => array(
                    'store_name' => 'Magento',
                    'background_color' => '#ef672f',
                )
            );
            foreach ($attributes as $namespace => $keys) {
                foreach ($keys as $key => $default) {
                    $event->attributes[$namespace . '.' . $key] =
                        $this->settings->get($namespace . '.' . $key) ?: $default;
                }
            }
        }
    }
}
