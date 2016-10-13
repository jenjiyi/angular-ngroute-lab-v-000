function UserService($http) {
    this.getUser = function (id) {
        return $http.get('http://0.0.0.0:8882/rest/user/' + id);
        return user;
    };
}

angular
  .module('app')
  .service('UserService', UserService);
