(function(){

  angular
       .module('app.dashboard')
       .controller('DashBoardCtrl', ['$log', '$q', DashBoardCtrl]);

  /**
   * Main Controller for the Cisco-Dashboard App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function DashBoardCtrl($log, $q) {
    var vm = this;
        vm.deviceOnePercentage = 65;
        vm.deviceTwoPercentage = 95;
        vm.deviceThreePercentage = 90;
        vm.deviceOneOptions = {
            animate:{
                duration:2000,
                enabled:true
            },
            barColor:'#FE7328',
            scaleColor:false,
            lineWidth:10,
            lineCap:'circle',
            size:160
        };
        vm.deviceTwoOptions = {
            animate:{
                duration:2000,
                enabled:true
            },
            barColor:'#7ACC5A',
            scaleColor:false,
            lineWidth:10,
            lineCap:'circle',
            size:160
        };
        vm.deviceThreeOptions = {
            animate:{
                duration:2000,
                enabled:true
            },
            barColor:'#FFC539',
            scaleColor:false,
            lineWidth:10,
            lineCap:'circle',
            size:160
        };
      

  }

})();
