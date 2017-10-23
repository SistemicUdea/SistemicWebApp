app.controller('thesisCtrl',function ($scope,$firebaseArray) {
  var ref = firebase.database().ref('Documentos').child('Thesis');
  $scope.thesis = $firebaseArray(ref);
});  