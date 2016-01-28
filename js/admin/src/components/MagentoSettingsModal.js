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
        <label>Log In Button Settings</label>
        <div className="Form-group--column50">
          <label>Store Name</label>
          <input className="FormControl" placeholder="Magento" bidi={this.setting('vovayatsyuk-auth-magento.store_name')}/>
        </div>
        <div className="Form-group--column50">
          <label>Background</label>
          <input className="FormControl" placeholder="#ef672f" bidi={this.setting('vovayatsyuk-auth-magento.background_color')}/>
        </div>
      </div>,

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
