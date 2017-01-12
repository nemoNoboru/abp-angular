app.controller('mentrenamientosCtrl',['$scope','$firebaseObject','$firebaseArray',function ($scope,$firebaseObject,$firebaseArray) {
  // conseguimos los ejercicios de la tabla de ejercicios que le corresponde al usuario
  var ref = firebase.database().ref().child('users').child('Hc2FD5TATVPRzhNiWAmRpkYV5172')
  $scope.Tablaejercicios = []
  $scope.ejercicios = [];
  $firebaseObject(ref).$loaded(function (u) {
    var ref = firebase.database().ref().child('Tables').child(u.table).child('ejercicios');
    $firebaseArray(ref).$loaded(function (t) {
      t.forEach(function (e) {
        var ref = firebase.database().ref().child('Exercises').child(e.$value);
        $scope.Tablaejercicios.push($firebaseObject(ref))
      })
    })
  })

  // conseguimos sus sesiones
  ref = firebase.database().ref().child('Sesions').child('Hc2FD5TATVPRzhNiWAmRpkYV5172');
  $scope.sesiones = $firebaseArray(ref);

  $scope.createSession = function (name) {
    $scope.sesiones.$add({'name':name,'exercises':$scope.Tablaejercicios});
  }

  $scope.changeSession = function (session) {
    var ref = firebase.database().ref().child('Sesions').child('Hc2FD5TATVPRzhNiWAmRpkYV5172').child(session);
    $firebaseObject(ref).$loaded(function (t) {
      console.log(t.exercises);
      $scope.ejercicios = $firebaseArray(t.exercises);
    })
  }

}]);
