angular.module('angNews2App').factory('Post', function($resource) {
	return $resource("https://ang-news-c47e4.firebaseio.com/posts/:id.json");
}