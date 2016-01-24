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
        Log in with Magento
      </LogInButton>
    );
  });
});
