angular.module('GiphyApp', [])

// .run(function() {
//   console.log('App has loaded!');
// });

.controller('GiphyCtrl', ['$scope', '$http', function($scope, $http){
  $scope.searchTerm = "foxes"

  $scope.gifs = [];

  $scope.getGifs = function(){
    var request = {
      url: 'http://api.giphy.com/v1/gifs/search?q=' + $scope.searchTerm + '&api_key=dc6zaTOxFJmzC',
      method: 'GET'
    }

    $http(request).then(function success(res){
      $scope.gifs = res.data.data;
      console.log($scope.gifs);
    }, function error(res){
      console.log(res);
    });
  }
}]);
