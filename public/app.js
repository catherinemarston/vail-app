angular.module('resortApp', ['ui.router', 'ui.bootstrap']).config(function($stateProvider, $urlRouterProvider){

$stateProvider
.state('landing', {
  url: '/',
  templateUrl: './app/gate/gate.html'
})
// beach with 2 pages
.state('beach', {
  url: '/beach',
  templateUrl: './app/beach_landing.html'
})
  .state('about', {
    url: '/beach/about',
    templateUrl: './app/about/about.html'
  })
  // .state('landing', {
  //   url: '/',
  //   templateUrl: './app/gate/gate.html'
  // })

// mountain with 2 pages
.state('mountain', {
  url: '/mountain',
  templateUrl: './app/mountain_landing.html'
})
  .state('mountain', {
    url: '/mountain/about',
    templateUrl: './app/about/about.html'
  })

  $urlRouterProvider
    .otherwise('/');
});
