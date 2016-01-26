# Flarum authentication with Magento store

Extension provides ability to authenticate into Flarum forum with Magento store
account.

## ~~It's not working yet~~ It works! :+1:

~~Unfortunately Magento does not provide user info endpoint for the currently
authenticated user, so this module can't receive any user details after
authentication.~~

OAuth 1.0 Client [finally has](thephpleague/oauth1-client#59) a built-in support
for magento stores.

## Installation

```
composer config repositories.vovayatsyuk/flarum-ext-auth-magento vcs git@github.com:vovayatsyuk/flarum-ext-auth-magento.git
composer require vovayatsyuk/flarum-ext-auth-magento
```

Configure module at Flarum extensions management page.

    Store URL   - Your Magento store url
    API Key     - Consumer Key
    API Secret  - Consumer Secret

If you are not sure where to get API key and secret - proceed to the
[magento setup](#magento-setup) section.

## Magento setup

1. Allow Authenticated Customer to access to the `Customer` resource.

    * Navigate to `System > Web Services > REST - Roles` and select `Customer` role.

        ![REST Roles Grid](/resources/docs/images/magento/roles_grid.png)

    * Switch to `Role API Resources` tab and grant access to
        `Customer/Customer/Retrieve` resource.

        ![Customer Role Form](/resources/docs/images/magento/role_form.png)

2. Allow Authenticated Customer to access to `Email`, `First Name` and `Last Name`
    attributes.

    * Navigate to `System > Web Services > REST - Attributes` and select `Customer`
        user type.

        ![REST Roles Grid](/resources/docs/images/magento/attributes_grid.png)

    * Grant access to read `Email`, `First Name` and `Last Name` attributes.

        ![Attribute Rules for Customer Role](/resources/docs/images/magento/attributes_form.png)

3. Create OAuth Consumer.

    * Navigate to `System > Web Services > REST - OAuth Consumers` and press
        `Add New` button in right upper corner.

        ![OAuth Consumers Grid](/resources/docs/images/magento/oauth_consumers_grid.png)

    * Fill Consumer Name and save it.

        ![OAuth Consumer Form](/resources/docs/images/magento/oauth_consumer_form.png)

        That's it! Now you can use the `Key` and `Secret` fields values for Flarum
        extension configuration.
