app.controller('conference_articleCtrl',function ($scope,$firebaseArray) {
  var ref = firebase.database().ref('Documentos').child('Conference');
  $scope.conference_articles = $firebaseArray(ref);
});  

