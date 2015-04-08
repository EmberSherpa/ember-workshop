export function initialize(container, application) {
  application.inject('controller', 'reminder', 'service:reminder');
}

export default {
  name: 'reminder',
  initialize: initialize
};
