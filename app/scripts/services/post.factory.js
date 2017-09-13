"use strict";

angular.module('ngNewsApp').factory('Post', function($firebase){
  //  var ref = new Firebase('https://ang-news-c47e4.firebaseio.com/posts/:id.json'+ posts);
  var config = {
    apiKey: "AIzaSyBmqAw2Fnm5XKlnrMA4gcHQJLVAJXvQDJc",
    authDomain: "ang-news-c47e4.firebaseapp.com",
    databaseURL: "https://ang-news-c47e4.firebaseio.com",
    projectId: "ang-news-c47e4",
    storageBucket: "ang-news-c47e4.appspot.com",
    messagingSenderId: "139865022466"
  };
  firebase.initializeApp(config);
  var rootRef= firebase.database().ref();

  var posts= $firebase(rootRef);
});