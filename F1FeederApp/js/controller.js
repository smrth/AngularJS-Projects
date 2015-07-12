angular.module('F1Feeder.controller', [])
	.controller('driversController', function($scope, ergastAPIservice) {

		$scope.driversList = [];
		$scope.nameFilter = null;

		$scope.searchFilter = function (driver) {
		    var keyword = new RegExp($scope.nameFilter, 'i');
		    return !$scope.nameFilter || keyword.test(driver.Driver.givenName) || keyword.test(driver.Driver.familyName);
		};

		ergastAPIservice.getDrivers().success(function (response) {
	        $scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    	});

});