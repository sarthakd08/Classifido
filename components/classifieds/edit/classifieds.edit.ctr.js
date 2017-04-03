(function(){

	'use strict';

angular
	.module('ngClassifieds')
	.controller('editClassifiedsCtrl', function($scope, $timeout, $state, $mdSidenav, $mdDialog, classifiedsFactory){

		var vm = this;

		vm.classifieds = classifiedsFactory.ref;
		vm.closeSidenav = closeSidenav;
		vm.saveEdit = saveEdit;
		vm.classified = vm.classifieds.$getRecord($state.params.id);

		console.log('vm.classified: ', vm.classified);

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

			function saveEdit(){
					vm.classifieds.$save(vm.classified).then(function(){
						$scope.$emit('editSaved', 'Edit Successfuly saved!')
						vm.sidenavOpen = false;
					});
			}


	})
})();
