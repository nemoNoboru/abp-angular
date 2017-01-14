app.controller('monitorizarCtrl',['$scope','$firebaseArray',function ($scope,$firebaseArray) {
  var usuarios = firebase.database().ref().child('users')
  $scope.usuarios = $firebaseArray(usuarios)

  $scope.reloadSesiones = function (usuario) {
    var sesiones = firebase.database().ref().child('Sesions').child(usuario)
    $scope.sesiones = $firebaseArray(sesiones)
  }

  $scope.reloadEjercicios = function (sesiones) {
    var ejercicios = firebase.database().ref().child('Sesions').child($scope.ausuario).child(sesiones).child('exercises')
    $scope.ejercicios = $firebaseArray(ejercicios)
  }
}])
