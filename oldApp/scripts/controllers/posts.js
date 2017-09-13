'use strict';

/**
 * @ngdoc function
 * @name angNews2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angNews2App
 */
angular.module('angNews2App')
  .controller('PostsCtrl', function($scope, Post){
	$scope.posts= [];
	$scope.post= {url: 'http://', title: ''};

	$scope.submitPost = function() {
		$scope.posts.push($scope.post)
		$scope.post = {url: 'http://', title:''};
	}

	$scope.deletePost = function(index) {
		$scope.posts.splice(index, 1);
		}    
    
  });

