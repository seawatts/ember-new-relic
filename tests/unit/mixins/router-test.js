import Ember from 'ember';
import RouterMixin from '../../../mixins/router';
import { module, test } from 'qunit';

module('Unit | Mixin | router');

// Replace this with your real tests.
test('it works', function(assert) {
  let RouterObject = Ember.Object.extend(RouterMixin);
  let subject = RouterObject.create();
  assert.ok(subject);
});
