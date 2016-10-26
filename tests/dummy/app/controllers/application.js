import Ember from 'ember';

const {
  Controller,
  Logger,
  RSVP,
  get,
  inject: {
    service
  }
} = Ember;

export default Controller.extend({
  newRelic: service(),
  actions: {
    throwError() {
      throw new Error('My custom thrown error');
    },
    logError() {
      Logger.error('My console error');
    },
    rejectPromise() {
      RSVP.reject();
    },
    addPageAction() {
      get(this, 'newRelic').addPageAction('test', {
        attribute: 'my attribute'
      });
    }

  }
});
