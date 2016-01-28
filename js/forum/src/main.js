import { extend } from 'flarum/extend';
import app from 'flarum/app';
import LogInButtons from 'flarum/components/LogInButtons';
import LogInButton from 'flarum/components/LogInButton';

app.initializers.add('vovayatsyuk-auth-magento', () => {
  extend(LogInButtons.prototype, 'items', function(items) {
    items.add('magento',
      <LogInButton
        style={
          "background: color".replace(
            'color',
            app.forum.attribute('vovayatsyuk-auth-magento.background_color')
          )
        }
        className="Button LogInButton--magento"
        path="/auth/magento">
        {
          app.translator.trans(
            'vovayatsyuk-auth-magento.forum.log_in.button',
            { site: app.forum.attribute('vovayatsyuk-auth-magento.store_name') }
          )
        }
      </LogInButton>
    );
  });
});
