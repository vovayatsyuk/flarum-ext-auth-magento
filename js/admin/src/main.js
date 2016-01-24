import app from 'flarum/app';

import MagentoSettingsModal from 'vovayatsyuk/auth/magento/components/MagentoSettingsModal';

app.initializers.add('vovayatsyuk-auth-magento', () => {
  app.extensionSettings['vovayatsyuk-auth-magento'] = () => app.modal.show(new MagentoSettingsModal());
});
