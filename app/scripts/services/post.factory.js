"use strict";

angular.module('ngNewsApp').factory('Post', function($firebase){
  var ref = new Firebase('https://ang-news-c47e4.firebaseio.com/posts/:id.json'+ posts);

  firebase.initializeApp(config);
  var rootRef= firebase.database().ref();

  var posts= $firebase(rootRef);
});