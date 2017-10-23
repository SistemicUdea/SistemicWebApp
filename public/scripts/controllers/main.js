app.controller('mainCtrl', function($scope,$window,$firebaseArray){

    var DocType;
    var FilterType;
    var ResultAuto;
    var keys = [];
    var list = [];
    var ref = firebase.database().ref('Documentos');

    document.getElementById("TypeSelect").onchange = function(){
        if($scope.state){
            $scope.state = !$scope.state;
            keys = [];
            list = [];
        }
    }

    document.getElementById("FiltSelect").onchange = function(){
        if($scope.state){
            $scope.state = !$scope.state;
            keys = [];
            list = [];
        }
    }


    $scope.fillAutocomplete = function() {
        DocType = $scope.query['Document'];
        FilterType = $scope.query['Filter'];

        if(DocType != 'Any'){
            ref.child(DocType).on('value', function(snap){
                snap.forEach(function(item) {
                    var itemVal = item.val();
                    keys.push(itemVal);
                });
                for (i=0; i < keys.length; i++) {
                    var value;
                    switch(FilterType){
                        case "title":
                            value = keys[i].title;
                        break;
                        case "author":
                            value = keys[i].author;
                        break;
                        case "year":
                            value = keys[i].year;
                        break;
                    }
                    var add = $.inArray(value,list);//Check if value exists, returns -1 if not
                    if(add == -1){
                        list.push(value);
                    }
                }
            });
        }else{
            ref.child('Book').on('value', function(snap){
                snap.forEach(function(item) {
                    var itemVal = item.val();
                    keys.push(itemVal);
                });
                for (i=0; i < keys.length; i++) {
                    var value;
                    switch(FilterType){
                        case "title":
                            value = keys[i].title;
                        break;
                        case "author":
                            value = keys[i].author;
                        break;
                        case "year":
                            value = keys[i].year;
                        break;
                    }
                    var add = $.inArray(value,list);//Check if value exists, returns -1 if not
                    if(add == -1){
                        list.push(value);
                    }
                }
            });
            ref.child('BookChapter').on('value', function(snap){
                snap.forEach(function(item) {
                    var itemVal = item.val();
                    keys.push(itemVal);
                });
                for (i=0; i < keys.length; i++) {
                    var value;
                    switch(FilterType){
                        case "title":
                            value = keys[i].title;
                        break;
                        case "author":
                            value = keys[i].author;
                        break;
                        case "year":
                            value = keys[i].year;
                        break;
                    }
                    var add = $.inArray(value,list);//Check if value exists, returns -1 if not
                    if(add == -1){
                        list.push(value);
                    }
                }
            });
            ref.child('BookEdition').on('value', function(snap){
                snap.forEach(function(item) {
                    var itemVal = item.val();
                    keys.push(itemVal);
                });
                for (i=0; i < keys.length; i++) {
                    var value;
                    switch(FilterType){
                        case "title":
                            value = keys[i].title;
                        break;
                        case "author":
                            value = keys[i].author;
                        break;
                        case "year":
                            value = keys[i].year;
                        break;
                    }
                    var add = $.inArray(value,list);//Check if value exists, returns -1 if not
                    if(add == -1){
                        list.push(value);
                    }
                }
            });
            ref.child('Conference').on('value', function(snap){
                snap.forEach(function(item) {
                    var itemVal = item.val();
                    keys.push(itemVal);
                });
                for (i=0; i < keys.length; i++) {
                    var value;
                    switch(FilterType){
                        case "title":
                            value = keys[i].title;
                        break;
                        case "author":
                            value = keys[i].author;
                        break;
                        case "year":
                            value = keys[i].year;
                        break;
                    }
                    var add = $.inArray(value,list);//Check if value exists, returns -1 if not
                    if(add == -1){
                        list.push(value);
                    }
                }
            });
            ref.child('Journal').on('value', function(snap){
                snap.forEach(function(item) {
                    var itemVal = item.val();
                    keys.push(itemVal);
                });
                for (i=0; i < keys.length; i++) {
                    var value;
                    switch(FilterType){
                        case "title":
                            value = keys[i].title;
                        break;
                        case "author":
                            value = keys[i].author;
                        break;
                        case "year":
                            value = keys[i].year;
                        break;
                    }
                    var add = $.inArray(value,list);//Check if value exists, returns -1 if not
                    if(add == -1){
                        list.push(value);
                    }
                }
            });
            ref.child('Thesis').on('value', function(snap){
                snap.forEach(function(item) {
                    var itemVal = item.val();
                    keys.push(itemVal);
                });
                for (i=0; i < keys.length; i++) {
                    var value;
                    switch(FilterType){
                        case "title":
                            value = keys[i].title;
                        break;
                        case "author":
                            value = keys[i].author;
                        break;
                        case "year":
                            value = keys[i].year;
                        break;
                    }
                    var add = $.inArray(value,list);//Check if value exists, returns -1 if not
                    if(add == -1){
                        list.push(value);
                    }
                }
            });
            ref.child('Patent').on('value', function(snap){
                snap.forEach(function(item) {
                    var itemVal = item.val();
                    keys.push(itemVal);
                });
                for (i=0; i < keys.length; i++) {
                    var value;
                    switch(FilterType){
                        case "title":
                            value = keys[i].title;
                        break;
                        case "author":
                            value = keys[i].author;
                        break;
                        case "year":
                            value = keys[i].year;
                        break;
                    }
                    var add = $.inArray(value,list);//Check if value exists, returns -1 if not
                    if(add == -1){
                        list.push(value);
                    }
                }
            });
            ref.child('Report').on('value', function(snap){
                snap.forEach(function(item) {
                    var itemVal = item.val();
                    keys.push(itemVal);
                });
                for (i=0; i < keys.length; i++) {
                    var value;
                    switch(FilterType){
                        case "title":
                            value = keys[i].title;
                        break;
                        case "author":
                            value = keys[i].author;
                        break;
                        case "year":
                            value = keys[i].year;
                        break;
                    }
                    var add = $.inArray(value,list);//Check if value exists, returns -1 if not
                    if(add == -1){
                        list.push(value);
                    }
                }
            });
        }
        $("#tags").autocomplete({
            source: list
        });
        $scope.state = !$scope.state;
        $scope.Doc = DocType;
        $scope.Filt = FilterType;
    }

    $scope.sendQuery = function(){
        keys = [];
        list = [];
        $scope.Tag = $("#tags").val();
    }


});