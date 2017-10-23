app.controller('book_editionCtrl',function ($scope,$firebaseArray) {
  var ref = firebase.database().ref('Documentos').child('BookEdition');
  $scope.book_editions = $firebaseArray(ref);
});  