(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .run(appRun);

    appRun.$inject = ['routehelper']

    /* @ngInject */
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/',
                config: {
                    templateUrl: 'app/dashboard/dashboard.html',
                    controller: 'DashBoardCtrl',
                    controllerAs: 'vm',
                    title: 'Dashboard',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Dashboard'
                    }
                }
            }
        ];
    }
})();