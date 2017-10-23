app.controller('technical_reportCtrl',function ($scope,$firebaseArray) {
  var ref = firebase.database().ref('Documentos').child('Report');
  $scope.technical_reports = $firebaseArray(ref);
});  