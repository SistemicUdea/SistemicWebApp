/**
 *@author: Juan Camilo Peña Vahos
 *@description: Este controlador se encarga de los create de la aplicación
 *@date: 11/06/2017
 *@update: 10/10/2017
 */

'use strict';

app.controller('addCtrl', function addController($scope, $window, $firebaseArray) {      

  //Se obtienen todos los autores
  var AutoresLista = [];
  var ref = firebase.database().ref('Autores');
  $scope.autores = $firebaseArray(ref);

  $scope.currentYear = new Date().getFullYear();//Get the current year
  $scope.currentMonth = new Date().getMonth();
  $scope.currentDay = new Date().getDay();                          

  var database = firebase.database();
  //Con estas variables se hace el binding entre las vistas y el controlador
  $scope.author = {}; 
  $scope.bookChapter = {};
  $scope.book = {};
  $scope.bookEdition = {};
  $scope.conference = {};
  $scope.journal = {};
  $scope.patent = {};
  $scope.report = {};
  $scope.thesis = {};
  $scope.author['Active'] = false; //Es necesario dar un valor incial a la variable 'Active'

  //**************************************************************************************/
  //Función para agregar autores
  $scope.saveAuthor = function (){
    firebase.database().ref('Autores').child($scope.author['Name']).set({
      name: $scope.author['Name'],
      membershipType: $scope.author['MembershipType'],
      email: $scope.author['Email'],
      active: $scope.author['Active'] //Este parámetro esta inicializado en false;
    }, function(error) {
      //De acuerdo con error, se envia un 0 o un 1 para activar un mensaje de aviso
      if (error) {
        var ok = 0;
        $window.location.href = '/FIRESISTEMIC/Admin/#!/'+ok;
      } else {
        var ok = 1;
        $window.location.href = '/FIRESISTEMIC/Admin/#!/'+ok;
      }
    });
  }
  //**************************************************************************************/
  //**************************************************************************************/
  //Función para agregar Journal Articles
  $scope.saveJournal = function(){
    var UUID = generateUUID();
    firebase.database().ref('Documentos').child('Journal').child(UUID).set({
      title: $scope.journal['Title'],
      journal: $scope.journal['Journal'],
      pages: $scope.journal['Pags'],
      number: $scope.journal['Number'],
      volume: $scope.journal['Volume'],
      year: $scope.journal['Year'].toString(),
      colciencias: $scope.journal['CategoryColciencias'],
      sjRJcR: $scope.journal['CategoryJcr'],
      author: $scope.journal['Author']
    }, function(error) {
      //De acuerdo con error, se envia un 0 o un 1 para activar un mensaje de aviso
      if (error) {
        var ok = 0;
        $window.location.href = '/FIRESISTEMIC/Admin/#!/'+ok;
      } else {
        var ok = 1;
        $window.location.href = '/FIRESISTEMIC/Admin/#!/'+ok;
      }
    });
    $window.location.href = '/FIRESISTEMIC/Admin/#!/';
  }
  //**************************************************************************************/
  //**************************************************************************************/
  //Función para agregar libros
  $scope.saveBook = function(){
    var UUID = generateUUID();
    firebase.database().ref('Documentos').child('Book').child(UUID).set({
      title: $scope.book['Title'],
      editorial: $scope.book['Editorial'],
      year: $scope.book['Year'].toString(),
      author: $scope.book['Author']
    }, function(error) {
      //De acuerdo con error, se envia un 0 o un 1 para activar un mensaje de aviso
      if (error) {
        var ok = 0;
        $window.location.href = '/FIRESISTEMIC/Admin/#!/'+ok;
      } else {
        var ok = 1;
        $window.location.href = '/FIRESISTEMIC/Admin/#!/'+ok;
      }
    });
    $window.location.href = '/FIRESISTEMIC/Admin/#!/';
  }
  /****************************************************************************************/
  /****************************************************************************************/
  //Función para agregar capítulos de libros
  $scope.saveBookChapter = function(){
    var UUID = generateUUID();
    firebase.database().ref('Documentos').child('BookChapter').child(UUID).set({
      Title: $scope.bookChapter['Title'],
      BookTitle: $scope.bookChapter['TitleBook'],
      Pages: $scope.bookChapter['Pags'].toString(),
      Editorial: $scope.bookChapter['Editorial'],
      Year: $scope.bookChapter['Year'].toString(),
      Author: $scope.bookChapter['Author']
    }, function(error) {
      //De acuerdo con error, se envia un 0 o un 1 para activar un mensaje de aviso
      if (error) {
        var ok = 0;
        $window.location.href = '/FIRESISTEMIC/Admin/#!/'+ok;
      } else {
        var ok = 1;
        $window.location.href = '/FIRESISTEMIC/Admin/#!/'+ok;
      }
    });
    $window.location.href = '/FIRESISTEMIC/Admin/#!/';
  }
  /****************************************************************************************/
  /****************************************************************************************/
  //Función para agregar capítulos de libros
  /****************************************************************************************/

  $scope.saveBookEdition = function(){
    var UUID = generateUUID();
    firebase.database().ref('Documentos').child('BookEdition').child(UUID).set({
      title: $scope.bookEdition['Title'],
      pages: $scope.bookEdition['Pags'].toString(),
      editors: $scope.bookEdition['Editores'],
      editorial: $scope.bookEdition['Editorial'],
      year: $scope.bookEdition['Year'].toString(),
      author: $scope.bookEditon['Author']
    }, function(error) {
        if (error) {
          alert("Data could not be saved." + error);
        } else {
          alert("Data saved successfully.");
        }
    });
    $window.location.href = '/FIRESISTEMIC/Admin/#!/';
  }

  $scope.saveConference = function(){
    var UUID = generateUUID();
    firebase.database().ref('Documentos').child('Conference').child(UUID).set({
      title: $scope.conference['Title'],
      conference: $scope.conference['Conference'],
      place: $scope.conference['Place'],
      date: $scope.conference['Date'],
      year: $scope.conference['Year'].toString(),
      author: $scope.conference['Author']
    }, function(error) {
        if (error) {
          alert("Data could not be saved." + error);
        } else {
          alert("Data saved successfully.");
        }
    });
    $window.location.href = '/FIRESISTEMIC/Admin/#!/';
  }

  $scope.savePatent = function(){
    var UUID = generateUUID();
    firebase.database().ref('Documentos').child('Patent').child(UUID).set({
      title: $scope.patent['Title'],
      state: $scope.patent['State'],
      place: $scope.patent['Place'],
      year: $scope.patent['Year'].toString(),
      author: $scope.patent['Author']
    }, function(error) {
        if (error) {
          alert("Data could not be saved." + error);
        } else {
          alert("Data saved successfully.");
        }
    });
    $window.location.href = '/FIRESISTEMIC/Admin/#!/';
  }

  $scope.saveReport = function(){
    var UUID = generateUUID();
    firebase.database().ref('Documentos').child('Report').child(UUID).set({
      title: $scope.report['Title'],
      date: $scope.report['Date'],
      year: $scope.report['Year'].toString(),
      author: $scope.report['Author']
    }, function(error) {
        if (error) {
          alert("Data could not be saved." + error);
        } else {
          alert("Data saved successfully.");
        }
    });
    $window.location.href = '/FIRESISTEMIC/Admin/#!/';
  }

  $scope.saveThesis = function(){
    var UUID = generateUUID();
    firebase.database().ref('Documentos').child('Thesis').child(UUID).set({
      title: $scope.thesis['Title'],
      tutor: $scope.thesis['Tutor'],
      type: $scope.thesis['Type'],
      university: $scope.thesis['University'],
      year: $scope.thesis['Year'].toString(),
      author: $scope.thesis['Author']
    }, function(error) {
        if (error) {
          alert("Data could not be saved." + error);
        } else {
          alert("Data saved successfully.");
        }
    });
    $window.location.href = '/FIRESISTEMIC/Admin/#!/';
  }

  function generateUUID () { // Public Domain/MIT
    var d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
        d += performance.now(); //use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
  }

});