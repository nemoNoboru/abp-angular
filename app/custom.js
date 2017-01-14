var app = angular.module("app",["ngRoute","firebase"]);

app.run(["$rootScope", "$location", function($rootScope, $location) {
  $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
    // We can catch the error thrown when the $requireSignIn promise is rejected
    // and redirect the user back to the home page
    if (error === "AUTH_REQUIRED") {
      $location.path("/login");
    }
  });
}]);

app.factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    return $firebaseAuth();
  }
]);

app.config(function($routeProvider){
  $routeProvider
  .when('/login',{
    templateUrl: 'login/login.html',
    controller: 'loginCtrl',
    resolve: {
      "currentAuth": ["Auth", function(Auth) {
        return Auth.$waitForSignIn();
      }]
    }
  })
  .when('/perfil',{
    templateUrl: 'perfil/perfil.html',
    controller: 'perfilCtrl',
    resolve: {
      "currentAuth": ["Auth", function(Auth) {
        return Auth.$requireSignIn();
      }]
    }
  })
  .when('/usuarios',{
    templateUrl: 'usuarios/usuarios.html',
    controller: 'usuariosCtrl',
    resolve: {
      "currentAuth": ["Auth", function(Auth) {
        return Auth.$requireSignIn();
      }]
    }
  })
  .when('/ejercicios',{
    templateUrl: 'ejercicios/ejercicios.html',
    controller: 'ejercicioCtrl',
    resolve: {
      "currentAuth": ["Auth", function(Auth) {
        return Auth.$requireSignIn();
      }]
    }
  })
  .when('/tablas',{
    templateUrl: 'tablas/tablas.html',
    controller: 'tablaCtrl',
    resolve: {
      "currentAuth": ["Auth", function(Auth) {
        return Auth.$requireSignIn();
      }]
    }
  })
  .when('/actividades',{
    templateUrl: 'actividades/actividades.html',
    controller: 'actividadesCtrl',
    resolve: {
      "currentAuth": ["Auth", function(Auth) {
        return Auth.$requireSignIn();
      }]
    }
  })
  .when('/misentrenamientos',{
    templateUrl: 'misEntrenamientos/misentrenamientos.html',
    controller: 'mentrenamientosCtrl',
    resolve: {
      "currentAuth": ["Auth", function(Auth) {
        return Auth.$requireSignIn();
      }]
    }
  })
  .when('/misactividades',{
    templateUrl: 'misActividades/misactividades.html',
    controller: 'misactividadesCtrl',
    resolve: {
      "currentAuth": ["Auth", function(Auth) {
        return Auth.$requireSignIn();
      }]
    }
  });
});
