export default class ReduxController {
  /* @ngInject */
  constructor($ngRedux) {
    this.$ngRedux = $ngRedux;
    this.unsubscribe = this.$ngRedux.connect(this.mapStateToThis, this.mapDispatchToThis())(this);
  }

  mapStateToThis(state) {
    return {};
  }

  mapDispatchToThis() {
    return {};
  }

  // built-in hook
  $onDestroy() {
    this.unsubscribe();
  }
}
