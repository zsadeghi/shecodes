(() => {
    let module = angular.module('SheCodesLifestyle', ['ngRoute']);
    module.config(['$routeProvider', ($routeProvider) => {
        $routeProvider.when('/', {
            templateUrl: 'views/home.ng'
        }).when('/recipes/bread', {
            templateUrl: 'recipes/bread.ng'
        }).when('/recipes/meals', {
            templateUrl: 'recipes/meals.ng'
        }).when('/recipes/desserts', {
            templateUrl: 'recipes/desserts.ng'
        }).when('/recipes/drinks', {
            templateUrl: 'recipes/drinks.ng'
        });
    }]);
})();