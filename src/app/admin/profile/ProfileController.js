export default class ProfileController {
  /*@ngInject*/
  constructor($scope, $state, $ngRedux) {
    this.$scope = $scope;
    this.$state = $state;
    this.$ngRedux = $ngRedux;

    this.start();
  }

  start() {
    this.unsubscribe = this.$ngRedux.connect(this.mapStateToThis)(this);

    this.$scope.$on('$destroy', this.unsubscribe);

    const widgets = [
      {
        twilio_sid: '1231313d',
        twilio_token: 'XDDKXDDDEXDDEDDEDDD',
      },
      {
        twilio_sid: '1231313d',
        twilio_token: 'XDDKXDDDEXDDEDDEDDD',
      },
    ];
    this.widgets = widgets;
  }

  // Which part of the Redux global state does our component want to receive?
  mapStateToThis(state) {
    const { currentUser } = state;

    return {
      currentUser,
    };
  }
}
