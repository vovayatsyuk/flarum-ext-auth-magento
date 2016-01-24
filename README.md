# Flarum authentication with Magento store

Extension provides ability to authenticate into Flarum forum with Magento store
account.

## :-1: It's not working yet

Unfortunately Magento does not provide user info endpoint for the currently
authenticated user, so this module can't receive any user details after
authentication.

To fix this issue, I will try to create a simple Magento module, that will provide
customer email and name for authenticated request.

## Installation

1. Get module sources

    ```
    composer config repositories.vovayatsyuk/flarum-ext-auth-magento vcs git@github.com:vovayatsyuk/flarum-ext-auth-magento.git
    composer require vovayatsyuk/flarum-ext-auth-magento
    ```

2. Create consumer at Magento backend

    `System > Web Services > REST - OAuth Consumers`

3. Copy consumer fields into module settings at Flarum extension management page

    ```
    Store URL   - Your Magento store url
    API Key     - Consumer Key from Magento's backend
    API Secret  - Consumer Secret from Magento's backend
    ```
