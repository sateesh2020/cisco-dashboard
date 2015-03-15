(function() {
    'use strict';

    angular
        .module('app.devices')
        .run(appRun);

    appRun.$inject = ['routehelper']

    /* @ngInject */
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/devices',
                config: {
                    templateUrl: 'app/devices/devices.html',
                    controller: 'DevicesCtrl',
                    controllerAs: 'vm',
                    title: 'Devices',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Devices'
                    }
                }
            }
        ];
    }
})();