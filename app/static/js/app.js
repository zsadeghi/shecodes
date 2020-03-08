(() => {
    let module = angular.module('SheCodes', ['ngRoute']);
    module.config(['$routeProvider', ($routeProvider) => {
        $routeProvider.when('/', {
            templateUrl: 'views/home.ng'
        });
    }]);
})();