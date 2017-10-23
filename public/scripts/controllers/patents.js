app.controller('patentCtrl',function ($scope,$firebaseArray) {
  var ref = firebase.database().ref('Documentos').child('Patent');
  $scope.patents = $firebaseArray(ref);
});  