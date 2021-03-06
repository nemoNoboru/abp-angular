app.service('Ejercicio',['$firebaseArray',function($firebaseArray){
  var ref = firebase.database().ref().child('Exercises');
  this.lista = $firebaseArray(ref);

  this.saveActivo = function() {
    this.lista.$save(this.activo);
  }
}]);


app.controller('eCtrl',["$scope","Ejercicio","berus",function($scope,Ejercicio,berus) {
  console.log('EJERCICIO CONTROLER');
  berus.check('TRAINER')

  $scope.ejercicio = Ejercicio;
  $scope.thide = true;

  $scope.fthide = function(){
    $scope.thide = !$scope.thide;
  }

  $scope.setActivo = function(a){
    Ejercicio.activo = a;
  }
}]);

app.controller('formEjercicioCtrl',['$scope','Ejercicio',function($scope, Ejercicio) {
  $scope.ejercicio = Ejercicio;
}]);
