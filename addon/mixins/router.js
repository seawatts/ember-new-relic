import Ember from 'ember';

const {
  Mixin,
  inject,
  run,
  getWithDefault,
  get,
} = Ember;

export default Mixin.create({

  // Override post-transition hook to track page events
  didTransition() {
    this._super(...arguments);
    this._trackPage();
  },

  // Basic page tracking from ember-metrics
  _trackPage() {
    run.scheduleOnce('afterRender', () => {
      let page = document.location.pathname;
      let title = getWithDefault(this, 'currentRouteName', 'Unknown Route Name');

      get(this, 'metrics').trackPage({
        page,
        title
      });
    });
  }
});
