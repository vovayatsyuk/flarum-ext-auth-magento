<?php

use Vovayatsyuk\Auth\Magento\Listener;
use Illuminate\Contracts\Events\Dispatcher;

return function (Dispatcher $events) {
    $events->subscribe(Listener\AddClientAssets::class);
    $events->subscribe(Listener\AddMagentoAuthRoute::class);
    $events->subscribe(Listener\AddApiAttributes::class);
};
