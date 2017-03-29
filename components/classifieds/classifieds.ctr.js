(function(){

	'use strict';

	angular
		.module('ngClassifieds')
		.controller('classifiedsCtrl', function($scope, $state, $http, classifiedsFactory, $mdSidenav, $mdToast, $mdDialog){

			var vm = this;

			vm.openSidebar = openSidebar;
			vm.closeSidebar = closeSidebar;
			vm.selectedButton = selectedButton;
			vm.saveClassified = saveClassified;
			vm.editClassified = editClassified;
			vm.saveClassified = saveClassified;
			vm.deleteClassified = deleteClassified;

			vm.classifieds;
			vm.classified;
			vm.categoriesToSend;
			vm.editing;
			vm.editing;

			classifiedsFactory.getClassifieds().then(function(response){

				vm.classifieds = response.data;
					console.log(vm.classifieds);
				vm.categoriesToSend = getCategories(vm.classifieds);
				console.log(vm.categoriesToSend)
				});

				var Contact = {
					"name": "Sarthak Dua",
			 		"phone": "9834571234",
			 		"email": "sarthakdua1994@gmail.com"
				}


				function getCategories(classifieds){

					var categories = [];

					angular.forEach(classifieds, function(item){
						angular.forEach(item.categories, function(categoryItem){
							console.log(categoryItem);
							categories.push(categoryItem)
						})
					});

					return _.uniq(categories);
				}

				function openSidebar(){
					console.log('Editing Status: ', vm.editing);
					if(vm.editing){
						$state.go('classifieds.editing');
					} else {
						$state.go('classifieds.new');
					}
				}

				function closeSidebar(){
					$mdSidenav('left-sidenav').close();
				}

				function selectedButton(){
					console.log("wdkjcnwkdjcnwkjdc");
					// if (!$scope.class){
					// 	console.log('skjdcnksjdnck')
					// 	$scope.class = "selectedButton";
					// };
				}

				function saveClassified(classified){
					if(classified){
						classified.contact = Contact;
						vm.classifieds.push(classified);
						vm.classified = {};
						vm.closeSidebar();
						$scope.showToast('Classified Saved');
					}
				}

				function editClassified(classified){
					vm.editing = true;
					vm.openSidebar();
					vm.classified = classified;
					console.log('Current Object: ', vm.classified);
				}

				function deleteClassified(event, classified){
					console.log(event);
					var confirm = $mdDialog.confirm()
						.title('Are you sure you want to delete ' + classified.title + '?')
						.ok('Yes')
						.cancel('No')
						.targetEvent(event);

						console.log(classified);
					$mdDialog.show(confirm).then(function(){
						var index = vm.classifieds.indexOf(classified);
						console.log(index);
						vm.classifieds.splice(index, 1);
					}, function(){

					});
				}

				$scope.saveEdit = function(){
					vm.editing = false;
					vm.closeSidebar();
					$scope.showToast('Classified Edited');
				}

				$scope.showToast = function(message){
					$mdToast.show(
							$mdToast.simple().content(message)
							.position('top, right')
							.hideDelay(3000)
						);
				}

		});

})();
