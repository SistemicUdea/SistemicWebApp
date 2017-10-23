app.controller('anyCtrl',function ($scope,$firebaseArray) {
    var ref = firebase.database().ref('Documentos');

    var refBook = ref.child('Book');
    $scope.queryBook = $firebaseArray(refBook);

    var refBookChapter = ref.child('BookChapter');
    $scope.queryBookChapter = $firebaseArray(refBookChapter);

    var refBookEdition = ref.child('BookEdition');
    $scope.queryBookEdition = $firebaseArray(refBookEdition);

    var refConference = ref.child('Conference');
    $scope.queryConference = $firebaseArray(refConference);

    var refJournal = ref.child('Journal');
    $scope.queryJournal = $firebaseArray(refJournal);

    var refReport = ref.child('Report');
    $scope.queryReport = $firebaseArray(refReport);

    var refPatent = ref.child('Patent');
    $scope.queryPatent = $firebaseArray(refPatent);

    var refThesis = ref.child('Thesis');
    $scope.queryThesis = $firebaseArray(refThesis);

    $("#Book").toggle();
    $("#BookChapter").toggle();
    $("#BookEdition").toggle();
    $("#Conference").toggle();
    $("#Journal").toggle();
    $("#Report").toggle();
    $("#Patent").toggle();
    $("#Thesis").toggle();
    

});