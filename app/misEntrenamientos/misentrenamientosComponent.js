app.controller('mentrenamientosCtrl',['Auth','$scope','$firebaseObject','$firebaseArray','$filter','modalUtil',function (Auth,$scope,$firebaseObject,$firebaseArray,$filter,ModalUtil) {

  // conseguimos sus sesiones
  var user_id = Auth.$getAuth().uid;
  ref = firebase.database().ref().child('Sesions').child(user_id);
  $scope.sesiones = $firebaseArray(ref);

  $scope.createSession = function () {
    var name = $filter('date')(new Date(), 'd/M/yy', '+0100')
    // creamos una nueva sesion
    $scope.sesiones.$add({'name':name,'exercises':[]}).then(function (newref) {
      $firebaseArray(newref.child('exercises')).$loaded(function (sesion) {
        $scope.newSesion = sesion;
      });

      // cogemos la tabla asignada al usuario logeado
      var ref_usuario = firebase.database().ref().child('users').child(user_id)
      $firebaseObject(ref_usuario).$loaded(function (u) {
        var ref_tabla = firebase.database().ref().child('Tables').child(u.table).child('ejercicios');

        // una vez que tenemos la tabla anadimos los ejercicios uno por uno a la sesion
        $firebaseArray(ref_tabla).$loaded(function (t) {
          t.forEach(function (e) {
            console.log('addding ejercicio'+e.$value);
            var ref_ejercicio = firebase.database().ref().child('Exercises').child(e.$value);
            console.log($scope.newSesion);
            $firebaseObject(ref_ejercicio).$loaded(function (e) {
              console.log(e);
              console.log($scope.newSesion);
              $scope.newSesion.$add(e);
              console.log($scope.newSesion);
            })
          });
          })
        })
    })
    ModalUtil.ok();
  }

  $scope.changeSession = function (session) {
    var ref = firebase.database().ref().child('Sesions').child(user_id).child(session).child('exercises');
    $scope.ejercicios = $firebaseArray(ref);
  }

}]);
