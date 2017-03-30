(function(){
	'use strict';

	angular.module('ngClassifieds')
			.factory('classifiedsFactory', function($http, $firebaseArray, $firebaseObject){

				var ref = firebase.database().ref();

				return{
					ref: $firebaseArray(ref)
				}
			});
})();
