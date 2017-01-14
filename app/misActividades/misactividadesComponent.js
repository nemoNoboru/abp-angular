app.controller('misactividadesCtrl',['Auth','$scope','$firebaseArray','User',function (Auth,$scope,$firebaseArray,User) {
  var ref = firebase.database().ref().child('activities');
  var self = this;
  var myid = Auth.$getAuth().uid;
  $scope.activities = $firebaseArray(ref)
  $scope.activities.$watch(function () {
    $scope.activities.forEach(function (i) {
      self.is(i);
    })
  });

  this.is = function (activity) {
    var ref = firebase.database().ref().child('activities').child(activity.$id).child('participants');
    var is = false;
    var array = $firebaseArray(ref).$loaded(function (a) {
      a.forEach(function (i) {
        if(i.$value == myid){
          is = true;
        }
      });
      activity.is = is;
    });
  }

  $scope.subscribe = function (activity) {
    var ref = firebase.database().ref().child('activities').child(activity.$id).child('participants');
    var a = $firebaseArray(ref);
    console.log(a);
    a.$add(myid);
  }

  $scope.unsuscribe = function (activity) {
    var ref = firebase.database().ref().child('activities').child(activity.$id).child('participants');
    var a = $firebaseArray(ref).$loaded(function (a) {
      var toRev = null;
      a.forEach(function (i) {
        if(i.$value == myid){
          toRev = i;
        }
      })
      a.$remove(toRev);
    });
  }
}]);
