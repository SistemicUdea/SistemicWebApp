/**
 *@author: Juan Camilo Peña Vahos
 *@description: Main Angular Module
 *@date: 11/06/2017
 */

'use strict';

var app = angular.module('AdminModule',['ngRoute','firebase']);

app.config(function($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/book', {
        templateUrl:'views/book.html',
        controller: 'addCtrl'
      })
      .when('/bookChapter', {
        templateUrl:'views/book_chapter.html',
        controller: 'addCtrl'
      })
      .when('/bookEdition', {
        templateUrl:'views/book_edition.html',
        controller: 'addCtrl'
      })
      .when('/conference', {
        templateUrl:'views/conference.html',
        controller: 'addCtrl'
      })
      .when('/journal', {
        templateUrl:'views/journal.html',
        controller: 'addCtrl'
      })
      .when('/patent', {
        templateUrl:'views/patent.html',
        controller: 'addCtrl'
      })
      .when('/report', {
        templateUrl:'views/report.html',
        controller: 'addCtrl'
      })
      .when('/thesis', {
        templateUrl:'views/thesis.html',
        controller: 'addCtrl'
      })
      .when('/author',{
        templateUrl:'views/author.html',
        controller: 'addCtrl'
      })
      .when('/:ok',{
        templateUrl:'views/main.html',
        controller: 'mainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });