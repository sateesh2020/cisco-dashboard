angular.module('app-router', ['ui.router'])
       .config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
    
            $urlRouterProvider.otherwise('/dashboard');

            $stateProvider

                // Dashboard ========================================
                .state('dashboard', {
                    url: '/dashboard',
                    templateUrl: 'app/dashboard/dashboard.html'
                })


                // Devices  =========================================
                .state('devices', {
                    url: '/devices',
                    templateUrl: 'app/devices/devices.html'  

                });

}]);