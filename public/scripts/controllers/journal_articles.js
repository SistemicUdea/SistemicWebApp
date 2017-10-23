app.controller('journal_articleCtrl',function ($scope,$firebaseArray) {
  var ref = firebase.database().ref('Documentos').child('Journal');
  $scope.journal_articles = $firebaseArray(ref);
});  