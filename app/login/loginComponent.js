app.factory('User',['$firebaseAuth',function($firebaseAuth){
  self = this;
  self.user = null;
  self.doLogin = function(email,pass){
    console.log(email);
    console.log(pass);
    return $firebaseAuth().$signInWithEmailAndPassword(email,pass);
  }
  return self;
}]);

app.controller('loginCtrl',["$scope","User",function($scope,User){
  console.log(User);
  $scope.login = function(){
    User.doLogin($scope.user,$scope.pass).then(function(u){
      User.user = u;
    }).catch(function(){
      $scope.error = "Usuario/password invalido";
    })
  }
}]);
