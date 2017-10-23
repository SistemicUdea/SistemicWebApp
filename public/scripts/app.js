/**
 *@author: Juan Camilo Peña Vahos
 *@description: Este documento las principales funciones de firebase y angular
 *@date: 11/06/2017
 */

'use strict';

var app = angular.module('MainModule',['ngRoute','firebase']);//app variable that contains the module

app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'mainCtrl'
      })
      .when('/Any', {
        templateUrl: 'views/any.html',
        controller: 'anyCtrl'
      })
      .when('/book', {
        templateUrl: 'views/books.html',
        controller: 'bookCtrl'
      })
      .when('/bookChapter', {
        templateUrl: 'views/book_chapters.html',
        controller: 'book_chapterCtrl'
      })
      .when('/bookEdition', {
        templateUrl: 'views/book_editions.html',
        controller: 'book_editionCtrl'
      })
      .when('/conferenceArticle', {
        templateUrl: 'views/conference_articles.html',
        controller: 'conference_articleCtrl'
      })
      .when('/journalArticle', {
        templateUrl: 'views/journal_articles.html',
        controller: 'journal_articleCtrl'
      })
      .when('/patent', {
        templateUrl: 'views/patents.html',
        controller: 'patentCtrl'
      })
      .when('/technicalReport', {
        templateUrl: 'views/technical_reports.html',
        controller: 'technical_reportCtrl'
      })
      .when('/thesis', {
        templateUrl: 'views/thesis.html',
        controller: 'thesisCtrl'
      })
      .when('/SearchResult/doctype/:doc/filtType/:filt/tag/:tag',{
        templateUrl: 'views/search.html',
        controller: 'bindCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
  