import SettingsModal from 'flarum/components/SettingsModal';

export default class MagentoSettingsModal extends SettingsModal {
  className() {
    return 'MagentoSettingsModal Modal--small';
  }

  title() {
    return 'Magento Settings';
  }

  form() {
    return [
      <div className="Form-group">
        <label>Store URL</label>
        <input className="FormControl" bidi={this.setting('vovayatsyuk-auth-magento.store_url')}/>
      </div>,

      <div className="Form-group">
        <label>API Key</label>
        <input className="FormControl" bidi={this.setting('vovayatsyuk-auth-magento.api_key')}/>
      </div>,

      <div className="Form-group">
        <label>API Secret</label>
        <input className="FormControl" bidi={this.setting('vovayatsyuk-auth-magento.api_secret')}/>
      </div>
    ];
  }
}
