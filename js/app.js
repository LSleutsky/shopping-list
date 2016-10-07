var app = angular.module("shoppingList", []);
app.controller("listCtrl", ['$scope', function($scope) {
  $scope.items = [];
  $scope.addItem = function() {
    $scope.error = "";
    
    if ($scope.items.indexOf($scope.toAdd.toLowerCase()) === -1) {
        $scope.items.push($scope.toAdd.toLowerCase());
    } else {
      $scope.error = "No can do, you already added that item!";
    }
    
    $scope.toAdd = "";
  };
  $scope.removeItem = function(item) {
    $scope.items.splice(item, 1);
    $scope.error = "";
  };
}]);