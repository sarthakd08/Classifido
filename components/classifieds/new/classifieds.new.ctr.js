(function(){

	'use strict';

angular
	.module('ngClassifieds')
	.controller('newClassifiedsCtrl', function($scope, $timeout, $state, $mdSidenav, $mdDialog, classifiedsFactory){

		var vm = this;

		vm.closeSidenav = closeSidenav;
		vm.saveClassified = saveClassified;

			$timeout(function() {
				$mdSidenav('left-sidenav').open();
			});

			$scope.$watch('vm.sidenavOpen', function(sidenav){
				if(sidenav ==+ false) {
					$mdSidenav('left-sidenav')
							.close()
							.then(function(){
								$state.go('classifieds');
							});
				}
			});

			function closeSidenav(){
				vm.sidenavOpen = false;
			}

			function saveClassified(classified) {
				console.log('kwdfwkdfbws')
				if(classified){
					var Contact = {
						"name": "Sarthak Dua",
						"phone": "9834571234",
						"email": "sarthakdua1994@gmail.com"
					}
					classified.contact = Contact;
					$scope.$emit('newClassified', classified);
					vm.sidenavOpen = false;
				}
			}

	});
})();
