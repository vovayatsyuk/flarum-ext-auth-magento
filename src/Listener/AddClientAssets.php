<?php

namespace Vovayatsyuk\Auth\Magento\Listener;

use Flarum\Event\ConfigureClientView;
use Flarum\Event\ConfigureLocales;
use Illuminate\Contracts\Events\Dispatcher;

class AddClientAssets
{
    /**
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        $events->listen(ConfigureClientView::class, [$this, 'addAssets']);
        $events->listen(ConfigureLocales::class, [$this, 'addLocales']);
    }

    /**
     * @param ConfigureClientView $event
     */
    public function addAssets(ConfigureClientView $event)
    {
        if ($event->isForum()) {
            $event->addAssets([
                __DIR__ . '/../../js/forum/dist/extension.js',
                __DIR__ . '/../../less/forum/extension.less'
            ]);
            $event->addBootstrapper('vovayatsyuk/auth/magento/main');
        }

        if ($event->isAdmin()) {
            $event->addAssets([
                __DIR__ . '/../../js/admin/dist/extension.js'
            ]);
            $event->addBootstrapper('vovayatsyuk/auth/magento/main');
        }
    }

    /**
     * @param ConfigureLocales $event
     */
    public function addLocales(ConfigureLocales $event)
    {
        $localeDir = realpath(__DIR__ .'/../../locale');
        foreach (new \DirectoryIterator($localeDir) as $file) {
            if ($file->isFile() && in_array($file->getExtension(), ['yml', 'yaml'])) {
                $locale = pathinfo($file->getBasename(), PATHINFO_FILENAME);
                $event->locales->addTranslations($locale, $file->getPathname());
            }
        }
    }
}
