import angular from 'angular';
import 'common/core';

const component = {
  bindings: {
  },
  transclude: true,
  template: `
  <div class="socal-container bg-hoverblue fg-black50 text-center">
    <div>You need to sign in for those awesome features</div>
    <div class="facebook-btn-container">
      <button type="submit" class="facebook-btn btn-darkblue btn btn-lg btn-default">
        <i class="fa fa-facebook" aria-hidden="true"></i>
        <span>Sign in with Facebook</span>
      </button>
    </div>
  </div>
  `,
};

export default angular
  .module('app.auth.components.socialSignin', [])
  .component('socialSignin', component);
