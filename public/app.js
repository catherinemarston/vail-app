angular.module('resortApp', ['ui.router', 'ui.bootstrap']).config(function($stateProvider, $urlRouterProvider){

$stateProvider
.state('landing', {
  url: '/',
  templateUrl: './app/gate/gate.html'
})
// beach with 2 pages
.state('beach', {
  url: '/beach',
  templateUrl: './app/beach/beach_landing.html'
})
  .state('beachAbout', {
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
  templateUrl: './app/mountain/mountain_landing.html'
})
  // .state('mountainAbout', {
  //   url: '/mountain/about',
  //   templateUrl: './app/about/about.html'
  // })

  $urlRouterProvider
    .otherwise('/');
});
