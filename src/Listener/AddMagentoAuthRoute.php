<?php

namespace Vovayatsyuk\Auth\Magento\Listener;

use Flarum\Event\ConfigureForumRoutes;
use Illuminate\Contracts\Events\Dispatcher;

class AddMagentoAuthRoute
{
    /**
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        $events->listen(ConfigureForumRoutes::class, [$this, 'configureForumRoutes']);
    }

    /**
     * @param ConfigureForumRoutes $event
     */
    public function configureForumRoutes(ConfigureForumRoutes $event)
    {
        $event->get('/auth/magento', 'auth.magento', 'Vovayatsyuk\Auth\Magento\MagentoAuthController');
    }
}
