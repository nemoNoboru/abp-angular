var app = angular.module("app",["ngRoute","firebase"]);

app.config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl: 'login.html',
    controller: 'loginCtrl'
  })
  .when('/perfil',{
    templateUrl: 'perfil.html',
    controller: 'perfilCtrl'
  })
  .when('/usuarios',{
    templateUrl: 'usuarios.html',
    controller: 'usuariosCtrl'
  });
});
