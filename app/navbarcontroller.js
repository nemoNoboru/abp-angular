app.controller('navbarCtrl',['$scope','Auth','$firebaseObject',function ($scope,Auth,$firebaseObject) {
  $scope.auth = Auth;

  // any time auth state changes, add the user data to scope
  $scope.auth.$onAuthStateChanged(function(firebaseUser) {
    var ref = firebase.database().ref().child('users').child(firebaseUser.uid)
    $scope.user = $firebaseObject(ref)
  });
}])
