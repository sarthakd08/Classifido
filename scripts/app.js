 	angular
	.module('ngClassifieds', ['ngMaterial', 'ui.router'])
	.config(function($mdThemingProvider, $stateProvider, $urlRouterProvider	) {

		$mdThemingProvider.theme('default')
			.primaryPalette('teal')
			.accentPalette('orange');

		$stateProvider
			.state('classifieds', {
				url: '/classifieds',
				templateUrl : 'components/classifieds/classifieds.tpl.html',
				controller : 'classifiedsCtrl as vm'
			})
			.state('classifieds.new', {
				url: '/new',
				templateUrl : 'components/classifieds/new/classifieds.new.tpl.html',
				controller : 'newClassifiedsCtrl as vm'
			})
      .state('classifieds.editing', {
				url: '/editing',
				templateUrl : 'components/classifieds/edit/classifieds.edit.tpl.html',
				controller : 'editClassifiedsCtrl as vm'
			});

	  $urlRouterProvider.otherwise('/classifieds');

	});
