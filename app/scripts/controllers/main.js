'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webApp
 */
app.controller('MainCtrl', function ($scope, $http, CONFIG, toastr) {
   
   $scope.getData = function() {
		$http({
			method:'GET',
			// url:CONFIG.VBURL,
			url:'scripts/sample.json',
			data:'',
			headers:{
				'Authorization': 'CONFIG.FAKE'
			}
		})        
		.success(function(data) {
            $scope.feed = data.response;
        })
        .error(function(){
			toaster.pop('error', '', 'We can not connect to server', 3000, 'trustedHtml');
			

			console.log('Sample', $scope.feed);
        });
	};
});
