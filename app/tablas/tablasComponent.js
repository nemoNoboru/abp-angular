app.controller('tablaCtrl',['$scope','$firebaseArray','$firebaseObject','modalUtil',function($scope,$firebaseArray,$firebaseObject,modalUtil) {

  var ref = firebase.database().ref().child('Exercises');
  $scope.ejercicios = $firebaseArray(ref);

  var self = this;

  ref = firebase.database().ref().child('Tables');
  $scope.tablas = $firebaseArray(ref);

  // anadimos una nueva tabla
  $scope.addTabla = function(t) {
    $scope.tablas.$add(t);
    modalUtil.ok();
  }

  // borramos una tabla dada la ID pasada
  $scope.deleteTable = function(id) {
    $firebaseObject(firebase.database().ref().child('Tables').child(id)).$remove();
    modalUtil.ok();
  }

  // agregamos al array llamado ejercicios dentro de una estancia seleccionada de tables
  // el id del ejercicio a agregar
  $scope.agregar = function(ejercicio) {
    $scope.activeejercicios.$add(ejercicio);
  };

  self.recharge = function() {
    $scope.showejericios = [];
    $scope.activeejercicios.forEach(function(e) {
      console.log(e.$value);
      $scope.showejericios.push($firebaseObject(firebase.database().ref().child('Exercises').child(e.$value)));
    });
  };
  // recargamos los ejercicios pertenecientes a la tabla
  $scope.reload = function(activeid) {
    $scope.showejericios = [];
    var ref = firebase.database().ref().child('Tables').child(activeid).child('ejercicios');
    $scope.activeejercicios = $firebaseArray(ref);
    $scope.activeejercicios.$watch(function(e) {
      console.log(e);
      self.recharge()
      console.log($scope.showejericios);
    });
  };

  // borramos la id del ejercicio de la tabla activa si nos lo pide el usuario
  $scope.delete = function(record) {
    // vamos a buscar el indice del record
    var indice = $scope.showejericios.indexOf(record);

    // sabiendo el indice borramos la id de ese indice
    $scope.activeejercicios.$remove(indice);

  };

}]);
