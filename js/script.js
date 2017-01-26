var app = angular.module('myJJ', []);
	app.controller('control', function($scope) {
		$scope.list =  [{inputlist:'Eat Food', result:false}];
		
			$scope.submitlist = function() {
				$scope.list.push ({inputlist:$scope.inputact, result:false});
				$scope.inputact = "";
		};
		
		$scope.del = function() {
			var trash = $scope.list;
			$scope.list = [];
			angular.each(trash, function(x) {
				if (!x.result) $scope.list.push(x);
			});
		};
	});