import angular from 'angular';
import config from './config/global.config';

// external libs
import '@uirouter/angularjs';
import 'angular-local-storage';

// pages and global components
import pages from './pages/pages.module';
import navigation from './components/navigation/navigation.component';

angular
  .module(config.modules.app, [
    'ui.router',
    'LocalStorageModule',
    pages,
    navigation
  ])
  .config(['$stateProvider', '$locationProvider', ($stateProvider, $locationProvider) => {
    const homeState = {
      name: 'home',
      url: '/',
      component: 'home',
    };

    const usersState = {
      name: 'users',
      url: '/users',
      component: 'users',
    };

    $stateProvider.state(homeState);
    $stateProvider.state(usersState);

    $locationProvider.html5Mode(true);
  }]);

angular.element(document).ready(() => {
  angular.bootstrap(document, [config.modules.app], { strictDi: true });
});
