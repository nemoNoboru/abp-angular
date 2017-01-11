app.controller('usuariosCtrl',["$scope","$firebaseObject","$firebaseArray","$firebaseAuth",function($scope,$firebaseObject,$firebaseArray,$firebaseAuth){
  var ref = firebase.database().ref().child('users');
  $scope.users = $firebaseArray(ref);

  $scope.tuser = true;
  $scope.tcrearUsuario = function(){
    $scope.tuser = !$scope.tuser;
    console.log($scope.tuser);
  };

  $scope.crearUsuario = function(){
    $firebaseAuth().$createUserWithEmailAndPassword($scope.newuserEmail,$scope.newuserPass).then(function(userData) {
      console.log(userData.uid);
      var mref = firebase.database().ref().child('users').child(userData.uid);
      var newuser = $firebaseObject(mref);
      newuser.nombre = $scope.newuserEmail;
      newuser.edad = '-';
      newuser.peso = '-';
      newuser.tipo = 'PEF';
      newuser.$save()
    }).catch(function(error) {
    console.error("Error: ", error);
  });
  };

  ref = firebase.database().ref().child('Tables');
  $scope.tablas = $firebaseArray(ref);

  $scope.save = function(user){
    $scope.users.$save(user);
  };

  $scope.remove = function(user){
    $scope.users.$remove(user);
  };
}]);
