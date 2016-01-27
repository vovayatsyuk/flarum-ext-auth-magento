import { extend } from 'flarum/extend';
import app from 'flarum/app';
import LogInButtons from 'flarum/components/LogInButtons';
import LogInButton from 'flarum/components/LogInButton';

app.initializers.add('vovayatsyuk-auth-magento', () => {
  extend(LogInButtons.prototype, 'items', function(items) {
    items.add('magento',
      <LogInButton
        className="Button LogInButton--magento"
        path="/auth/magento">
        {app.translator.trans('vovayatsyuk-auth-magento.log_in.button', app.forum.attribute('vovayatsyuk-auth-magento.storeName'))}
      </LogInButton>
    );
  });
});
