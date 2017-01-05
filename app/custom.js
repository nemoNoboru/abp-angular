var app = angular.module("app",["ngRoute","firebase"]);

app.config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl: 'login/login.html',
    controller: 'loginCtrl'
  })
  .when('/perfil',{
    templateUrl: 'perfil/perfil.html',
    controller: 'perfilCtrl'
  })
  .when('/usuarios',{
    templateUrl: 'usuarios/usuarios.html',
    controller: 'usuariosCtrl'
  })
  .when('/ejercicios',{
    templateUrl: 'ejercicios/ejercicios.html',
    controller: 'ejercicioCtrl'
  })
  .when('/actividades',{
    templateUrl: 'actividades/actividades.html',
    controller: 'actividadesCtrl'
  });
});
