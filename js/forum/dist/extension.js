System.register('vovayatsyuk/auth/magento/main', ['flarum/extend', 'flarum/app', 'flarum/components/LogInButtons', 'flarum/components/LogInButton'], function (_export) {
  'use strict';

  var extend, app, LogInButtons, LogInButton;
  return {
    setters: [function (_flarumExtend) {
      extend = _flarumExtend.extend;
    }, function (_flarumApp) {
      app = _flarumApp['default'];
    }, function (_flarumComponentsLogInButtons) {
      LogInButtons = _flarumComponentsLogInButtons['default'];
    }, function (_flarumComponentsLogInButton) {
      LogInButton = _flarumComponentsLogInButton['default'];
    }],
    execute: function () {

      app.initializers.add('vovayatsyuk-auth-magento', function () {
        extend(LogInButtons.prototype, 'items', function (items) {
          items.add('magento', m(
            LogInButton,
            {
              className: 'Button LogInButton--magento',
              path: '/auth/magento' },
            'Log in with Magento'
          ));
        });
      });
    }
  };
});