app.service('Actividades',['$firebaseArray',function($firebaseArray){

  var ref = firebase.database().ref().child('activities');
  this.activities = $firebaseArray(ref);

  this.saveActivo = function() {
    this.actividades.$save(this.activo);
  }
}]);


app.controller('actividadesCtrl',["$scope","Actividades",'berus',function($scope,Actividades,berus) {
  berus.check('TRAINER')

  $scope.actividades = Actividades;
  $scope.thide = true;

  $scope.fthide = function(){
    $scope.thide = !$scope.thide;
  }

  $scope.setActivo = function(a){
    Actividades.activo = a;
  }
}]);

app.controller('formActivitiesCtrl',['$scope','Actividades',function($scope,Actividades) {
  $scope.actividades = Actividades;
}]);
