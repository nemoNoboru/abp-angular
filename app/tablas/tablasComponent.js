app.controller('tablaCtrl',['$scope','$firebaseArray',function($scope,$firebaseArray) {
  var ref = firebase.database().ref().child('Exercises');
  $scope.ejercicios = $firebaseArray(ref);

  ref = firebase.database().ref().child('Tables');
  $scope.tablas = $firebaseArray(ref);

  // agregamos al array llamado ejercicios dentro de una estancia seleccionada de tables
  // el id del ejercicio a agregar
  $scope.agregar = function(ejercicio) {
    $scope.activeejercicios.$add(ejercicio);
  };

  // recargamos los ejercicios pertenecientes a la tabla
  $scope.reload = function(activeid) {
    var ref = firebase.database().ref().child('Tables').child(activeid).child('ejercicios');
    $scope.activeejercicios = $firebaseArray(ref);
  };
}])
