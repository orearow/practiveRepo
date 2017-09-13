'use strict';

angular.module('ngNewsApp')
  .controller('PostsCtrl', function($scope, Post){
    var self = this;
    self.posts = Post.get();
    self.post = { title: '', url: ''};

    self.submitPost = function submitPost(){
        if(self.post.title !== '' && self.post.url !== ''){
            Post.save(self.post, function(ref){
                self.posts[ref.name] = self.post;
                self.post = { title: '', url: ''};
            });
        }
    };

    self.deletePost = function deletePost(postId){
        Post.delete({id: postId}, function(){
            delete self.posts[postId];
        });
    };

  });


//my version 

/*angular.module('ngNewsApp')
  .controller('PostsCtrl', function($scope, Post){
    $scope.posts= Post.get();
    $scope.post= {url: 'http://', title: ''};

    $scope.submitPost = function() {
        Post.save($scope.post, function(ref){ 
        $scope.posts[ref.name]= $scope.post;
        $scope.post= {url: 'http://', title:''};
        });
    };


    $scope.deletePost = function deletePost(postId){
        Post.delete({id: postId}, function(){
            delete $scope.posts[postId];
        });
    };

  });*/

  //works perfectly 

/*  angular.module('ngNewsApp')
  .controller('PostsCtrl', function (Post) {
    var self = this;
    self.posts = Post.get();
    self.post = { title: '', url: ''};

    self.submitPost = function submitPost(){
        if(self.post.title !== '' && self.post.url !== ''){
            Post.save(self.post, function(ref){
                self.posts[ref.name] = self.post;
                self.post = { title: '', url: ''};
            });
        }
    };

    self.deletePost = function deletePost(postId){
        Post.delete({id: postId}, function(){
            delete self.posts[postId];
        });
    };

  });
*/