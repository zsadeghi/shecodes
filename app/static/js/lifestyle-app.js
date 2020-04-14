(() => {
    let module = angular.module('SheCodesLifestyle', ['ngRoute']);
    module.config(['$routeProvider', ($routeProvider) => {
        $routeProvider.when('/', {
            templateUrl: 'views/home.ng'
        }).when('/recipes/bread', {
            templateUrl: 'recipes/bread.ng'
        }).when('/on-the-deck/independent-study', {
            templateUrl: 'views/on-the-deck/independent-study.ng'
        }).when('/on-the-deck/research-project', {
            templateUrl: 'views/on-the-deck/research-project.ng'
        });
    }]);
})();