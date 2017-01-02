app.controller('actividadesCtrl',["$scope","$firebaseArray",function($scope,$firebaseArray) {
  var ref = firebase.database().ref().child('activities');
  $scope.activities = $firebaseArray(ref);
  $scope.thide = true;

  $scope.fthide = function(){
    $scope.thide = !$scope.thide;
  }

  $scope.addActivity = function(act) {
    $scope.activities.$add(act);
  }

  $scope.save = function(activity){
    $scope.activities.$save(activity);
  }

  $scope.remove = function(activity) {
    $scope.activities.$remove(activity);
  }

}]);
