import angular from 'angular';
import 'common/core';

const component = {
  bindings: {
  },
  transclude: true,
  template: `
  <div class="socal-container bg-hoverblue fg-black50 text-center">
    <div class="facebook-btn-container">
      <button type="submit" class="facebook-btn btn btn-block btn-darkblue btn-lg btn-default">
        <i class="fa fa-facebook" aria-hidden="true"></i>
        <span>Sign up with Facebook</span>
      </button>
    </div>
    <div style="margin-top: 25px;">
      Already have an account?
      <a ui-sref="login">Login</a>
    </div>
  </div>
  `,
};

export default angular
  .module('app.auth.components.socialSignup', [])
  .component('socialSignup', component);
