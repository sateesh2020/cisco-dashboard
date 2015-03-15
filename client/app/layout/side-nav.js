(function() {
    'use strict';
    
    angular.module('app.layout')
            .controller('SideBarCtrl', SideBarCtrl);
    
    SideBarCtrl.$inject = ['$scope'];
    function SideBarCtrl($scope) {
        /*jshint validthis: true */
        var vm = this;
        
        vm.navRoutes = [
            {
                'originalPath':'dashboard',
                'content':'<span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-cubes fa-stack-1x fa-inverse"></i></span>Dashboard'
            },
            {
                'originalPath':'devices',
                'content':'Devices'
            },
            {
                'originalPath':'services',
                'content':'Services'
            }
        
        ]
    }
    
    
    
    
})();