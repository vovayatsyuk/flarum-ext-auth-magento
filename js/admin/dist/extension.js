System.register('vovayatsyuk/auth/magento/components/MagentoSettingsModal', ['flarum/components/SettingsModal'], function (_export) {
  'use strict';

  var SettingsModal, MagentoSettingsModal;
  return {
    setters: [function (_flarumComponentsSettingsModal) {
      SettingsModal = _flarumComponentsSettingsModal['default'];
    }],
    execute: function () {
      MagentoSettingsModal = (function (_SettingsModal) {
        babelHelpers.inherits(MagentoSettingsModal, _SettingsModal);

        function MagentoSettingsModal() {
          babelHelpers.classCallCheck(this, MagentoSettingsModal);
          babelHelpers.get(Object.getPrototypeOf(MagentoSettingsModal.prototype), 'constructor', this).apply(this, arguments);
        }

        babelHelpers.createClass(MagentoSettingsModal, [{
          key: 'className',
          value: function className() {
            return 'MagentoSettingsModal Modal--small';
          }
        }, {
          key: 'title',
          value: function title() {
            return 'Magento Settings';
          }
        }, {
          key: 'form',
          value: function form() {
            return [m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                'Store URL'
              ),
              m('input', { className: 'FormControl', bidi: this.setting('vovayatsyuk-auth-magento.store_url') })
            ), m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                'API Key'
              ),
              m('input', { className: 'FormControl', bidi: this.setting('vovayatsyuk-auth-magento.api_key') })
            ), m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                'API Secret'
              ),
              m('input', { className: 'FormControl', bidi: this.setting('vovayatsyuk-auth-magento.api_secret') })
            )];
          }
        }]);
        return MagentoSettingsModal;
      })(SettingsModal);

      _export('default', MagentoSettingsModal);
    }
  };
});;
System.register('vovayatsyuk/auth/magento/main', ['flarum/app', 'vovayatsyuk/auth/magento/components/MagentoSettingsModal'], function (_export) {
  'use strict';

  var app, MagentoSettingsModal;
  return {
    setters: [function (_flarumApp) {
      app = _flarumApp['default'];
    }, function (_vovayatsyukAuthMagentoComponentsMagentoSettingsModal) {
      MagentoSettingsModal = _vovayatsyukAuthMagentoComponentsMagentoSettingsModal['default'];
    }],
    execute: function () {

      app.initializers.add('vovayatsyuk-auth-magento', function () {
        app.extensionSettings['vovayatsyuk-auth-magento'] = function () {
          return app.modal.show(new MagentoSettingsModal());
        };
      });
    }
  };
});