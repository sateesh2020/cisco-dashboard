(function() {
    'use strict';

    angular.module('app.core', [
        /*
         * Angular modules
         */
        'ngAnimate', 'ngRoute',
        /*
         * Our reusable cross app code modules
         */
        'blocks.router', 'blocks.logger'
    ]);
})();
