import Ember from 'ember';
import ErrorHandler from '../utils/error-handler';

const {
  Logger,
  RSVP
} = Ember;

export function initialize(app) {
  const instance = app.lookup ? app : app.container;
  const newRelic = instance.lookup('service:new-relic');

  if (Ember.testing) {
    return;
  }


  // TODO: maybe set the app version here
  newRelic.configure({

  });

  const handler = new ErrorHandler(newRelic);

  let currentOnError = Ember.onerror;
  let currentErrorLogger = Logger.error;

  Ember.onerror = function() {
    handler.report(...arguments);
    if (currentOnError) {
      currentOnError(...arguments);
    }
  };

  RSVP.on('error', () => handler.report(...arguments));
  Logger.error = function() {
    handler.report(...arguments);
    if (currentErrorLogger) {
      currentErrorLogger(...arguments);
    }
  };
}

export default {
  name: 'new-relic',
  initialize
};
