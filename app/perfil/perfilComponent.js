app.controller('perfilCtrl',["$scope","Auth","$firebaseObject",function($scope,Auth,$firebaseObject){
  console.log(Auth.$getAuth());
  var ref = firebase.database().ref().child('users').child(Auth.$getAuth().uid);
  var o = $firebaseObject(ref);
  o.$bindTo($scope, "O");
  $scope.edit = true;
  $scope.tEdit = function(){
    $scope.edit = !$scope.edit;
  };

  $scope.signOut = function () {
    Auth.$signOut();
  }
}]);
