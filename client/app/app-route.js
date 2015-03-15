angular

.module('app-router', ['ui.router'])

.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/dashboard');
    
    $stateProvider
        
        // Dashboard ========================================
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'app/dashboard/dashboard.html'
        })
        
            
        // On-Demand --> New-Request  =================================
        .state('devices', {
            url: '/devices',
          	templateUrl: 'app/devices/devices.html'  
            
        })

        // On-Demand --> Roll-Back  =================================
        .state('services', {
            url: '/services',
            templateUrl: 'app/services/services.html'  
            
        })

        // Scheduled Maintenance Request  =================================
        .state('remote-users', {
            url: '/remote-users',
            templateUrl: 'app/remote-users/remote-users.html'  
            
        })

        // Reports Request  =================================
        .state('ordering', {
            url: '/ordering',
            templateUrl: 'app/ordering/ordering.html'  
            
        });
        
}]);