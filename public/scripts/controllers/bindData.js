app.controller('bindCtrl',function ($scope,$firebaseArray,$routeParams) {


    var DocType = $routeParams.doc;
    var FilterType = $routeParams.filt;
    var Tag = $routeParams.tag;

    if(DocType != 'Any'){
        var ref = firebase.database().ref('Documentos').child(DocType).orderByChild(FilterType).equalTo(Tag);
            switch(DocType){
                case "Book":
                    $("#Book").toggle();
                    $scope.queryBook = $firebaseArray(ref);
                break;
                case "BookChapter":
                    $("#BookChapter").toggle();
                    $scope.queryBookChapter = $firebaseArray(ref);
                break;
                case "BookEdition":
                    $("#BookEdition").toggle();
                    $scope.queryBookEdition = $firebaseArray(ref);
                break;
                case "Conference":
                    $("#Conference").toggle();
                    $scope.queryConference = $firebaseArray(ref);
                break;
                case "Journal":
                    $("#Journal").toggle();
                    $scope.queryJournal = $firebaseArray(ref);
                break;
                case "Report":
                    $("#Report").toggle();
                    $scope.queryReport = $firebaseArray(ref);
                break;
                case "Patent":
                    $("#Patent").toggle();
                    $scope.queryPatent = $firebaseArray(ref);
                break;
                case "Thesis":
                    $("#Thesis").toggle();
                    $scope.queryThesis = $firebaseArray(ref);
                break;
            }
    }else{
        var ref = firebase.database().ref('Documentos');
        refBook = ref.child('Book').orderByChild(FilterType).equalTo(Tag);
        $scope.queryBook = $firebaseArray(refBook);
        refChapter = ref.child('BookChapter').orderByChild(FilterType).equalTo(Tag);
        $scope.queryBookChapter = $firebaseArray(refChapter);
        refEdition = ref.child('BookEdition').orderByChild(FilterType).equalTo(Tag);
        $scope.queryBookEdition = $firebaseArray(refEdition);
        refConference = ref.child('Conference').orderByChild(FilterType).equalTo(Tag);
        $scope.queryConference = $firebaseArray(refConference);
        refJournal = ref.child('Journal').orderByChild(FilterType).equalTo(Tag);
        $scope.queryJournal = $firebaseArray(refJournal);
        refReport = ref.child('Report').orderByChild(FilterType).equalTo(Tag);
        $scope.queryReport = $firebaseArray(refReport);
        refPatent = ref.child('Patent').orderByChild(FilterType).equalTo(Tag);
        $scope.queryPatent = $firebaseArray(refPatent);
        refThesis =  ref.child('Thesis').orderByChild(FilterType).equalTo(Tag);
        $scope.queryThesis = $firebaseArray(refThesis);
        $("#Book").toggle();
        $("#BookChapter").toggle();
        $("#BookEdition").toggle();
        $("#Conference").toggle();
        $("#Journal").toggle();
        $("#Report").toggle();
        $("#Patent").toggle();
        $("#Thesis").toggle();

    }

});  