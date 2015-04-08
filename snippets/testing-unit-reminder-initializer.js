export function initialize(container, application) {
  // inject reminder service into every controller on property reminder.
  application.inject('controller', 'reminder', 'service:reminder');
}

export default {
  name: 'reminder',
  initialize: initialize
};
