(() => {
    let module = angular.module('SheCodes', ['ngRoute']);
    module.config(['$routeProvider', ($routeProvider) => {
        $routeProvider.when('/', {
            templateUrl: 'views/home.ng'
        }).when('/projects/starbox', {
            templateUrl: 'views/projects/starbox.ng'
        }).when('/on-the-deck/independent-study', {
            templateUrl: 'views/on-the-deck/independent-study.ng'
        }).when('/on-the-deck/research-project', {
            templateUrl: 'views/on-the-deck/research-project.ng'
        }).when('/projects/spotifind', {
            templateUrl: `views/projects/spotifind.ng`
        }).when('/projects/citysense', {
            templateUrl: 'views/projects/citysense.ng'
        }).when('/on-the-deck/blur', {
            templateUrl: 'views/on-the-deck/blur.ng'
        }).when('/on-the-deck/adventuroo', {
            templateUrl: 'views/on-the-deck/adventuroo.ng'
        });
    }]);
})();