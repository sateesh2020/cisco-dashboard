(function() {
    'use strict';
    
    angular.module('app.layout')
            .controller('SideBarCtrl', SideBarCtrl);
    
    SideBarCtrl.$inject = ['$scope','$location'];
    function SideBarCtrl($scope,location) {
        /*jshint validthis: true */
        var vm = this;
        vm.isSelected = function(view){
            console.log(view);
            return location.path().indexOf(view) !=-1;
        }
        vm.navRoutes = [
            {
                'originalPath':'dashboard',
                'content':'<span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-cubes fa-stack-1x fa-inverse"></i></span>Dashboard'
            },
            {
                'originalPath':'services',
                'content':'<span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-line-chart fa-stack-1x fa-inverse"></i></span>Services'
            },
            {
                'originalPath':'devices',
                'content':'<span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-th-large fa-stack-1x fa-inverse"></i></span>Devices'
            },
            {
                'originalPath':'remoteUsers',
                'content':'<span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-users fa-stack-1x fa-inverse"></i></span>Remote Users'
            },
            {
                'originalPath':'ordering',
                'content':'<span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-shopping-cart fa-stack-1x fa-inverse"></i></span>Ordering'
            }
        
        ]
    }
    
    
    
    
})();