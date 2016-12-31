app.controller('perfilCtrl',["$scope","User","$firebaseObject",function($scope,User,$firebaseObject){
  var ref = firebase.database().ref().child('users').child(User.user.uid);
  var o = $firebaseObject(ref);
  o.$bindTo($scope, "O");
  $scope.edit = false;
  $scope.tEdit = function(){
    $scope.edit = !$scope.edit;
  };
}]);
