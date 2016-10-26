import Ember from 'ember';
import getOwner from 'ember-getowner-polyfill';

const {
  Service,
  computed,
  get
} = Ember;
export default Service.extend({
  _fastboot: computed(function() {
    let owner = getOwner(this);
    return owner.lookup('service:fastboot');
  }),

  _isFastBoot: computed.readOnly('_fastboot.isFastBoot'),

  configure() {
  },

  newrelicAgent: computed(function() {
    return window.NREUM || {};
  }),

  addPageAction() {
    return !get(this, '_isFastBoot') && get(this, 'newrelicAgent')['addPageAction'](...arguments);
  },

  addToTrace() {
    return !get(this, '_isFastBoot') && get(this, 'newrelicAgent')['addToTrace'](...arguments);
  },

  finished() {
    return !get(this, '_isFastBoot') && get(this, 'newrelicAgent')['finished'](...arguments);
  },

  noticeError() {
    return !get(this, '_isFastBoot') && get(this, 'newrelicAgent')['noticeError'](...arguments);
  },

  setCustomAttribute() {
    return !get(this, '_isFastBoot') && get(this, 'newrelicAgent')['setCustomAttribute'](...arguments);
  },

  setErrorHandler() {
    return !get(this, '_isFastBoot') && get(this, 'newrelicAgent')['setErrorHandler'](...arguments);
  },

  setPageViewName() {
    return !get(this, '_isFastBoot') && get(this, 'newrelicAgent')['setPageViewName'](...arguments);
  },

  interaction() {
    return !get(this, '_isFastBoot') && get(this, 'newrelicAgent')['interaction'](...arguments);
  }
});
