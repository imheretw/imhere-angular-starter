import angular from 'angular';

/*@ngInject*/
function Model(Restangular) {
  var User = Restangular.service('users');
  Restangular.extendModel('users', function(model) {
    // you can add instance methods here
    return model;
  });

  return User;
}

/*@ngInject*/
function config(RestangularProvider) {
  RestangularProvider.addElementTransformer('users', true, function(user) {
    // custom static login method
    // POST /users/login
    user.addRestangularMethod('login', 'post', 'login');

    return user;
  });

  RestangularProvider.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
      var extractedData;
      if (operation === 'getList') {
        if (data.users) {
          extractedData = data.users;
          extractedData.pagination = data.pagination;
        }
      } else {
        if (data.user) {
          extractedData = data.user;
          extractedData.token = data.token;
        } else {
          extractedData = data.data;
        }
      }

      return extractedData;
    });
}

export default angular
  .module('common.models.User', [])
  .config(config)
  .factory('User', Model);
