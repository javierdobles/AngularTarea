var app = angular.module('app', [])
 
app.controller('BeerCounter', function($scope) {
  $scope.array = [
  {"name":"Marcos",
	"wage":21,
	"country":"CR"
  },
  {"name":"juan",
  "wage": 30,
  "country": "Finlandia"
  },
  {
	  "name":"carlos",
	  "wage":"32",
	  "country":"Tanzania"
  }
  ]
  $scope.Agregar = function(){
	  $scope.array.push($scope.persona);
	  $scope.persona = null;
  }
  $scope.Eliminar = function(indice){
    $scope.array.splice(indice,1);
  }
});