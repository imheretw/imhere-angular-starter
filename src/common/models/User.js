import angular from 'angular';
import BaseModel from './BaseModel';

/* @ngInject */
function Model(Restangular) {
  const User = Restangular.service('users');
  Restangular.extendModel('users', (model) => {
    // you can add instance methods here

    // to extend BaseModel
    BaseModel.call(model);

    model.img = 'http://i.gbc.tw/2010/zone/lol/champion/120/lulu.png';

    return model;
  });

  User.register = data => User.post(data);

  return User;
}

/* @ngInject */
function config(RestangularProvider) {
  RestangularProvider.addElementTransformer('users', true, (user) => {
    // custom static login method
    // POST /users/login
    // User.login(data);
    user.addRestangularMethod('login', 'post', 'login');

    // GET /users/current
    // User.getCurrentUser(data);
    user.addRestangularMethod('getCurrentUser', 'get', 'current');

    return user;
  });

  RestangularProvider.addResponseInterceptor((data, operation, what, url, response, deferred) => {
    let extractedData;
    if (operation === 'getList') {
      if (data.users) {
        extractedData = data.users;
        extractedData.pagination = data.pagination;
      }
    } else if (data.user) {
      extractedData = data.user;
      extractedData.token = data.token;
    } else {
      extractedData = data;
    }

    return extractedData;
  });
}

export default angular
  .module('common.models.User', [])
  .config(config)
  .factory('User', Model);
