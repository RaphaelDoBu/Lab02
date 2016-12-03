
var app = angular.module("app", []);
app.controller("listaDeTarefas", function ($scope) {
	
	$scope.listaDeTarefasParaCumprir = ['Estudar','Assistir series', 'Academia'];
	$scope.listaDeTarefasCompletas = [];
	$scope.progresso = $scope.listaDeTarefasParaCumprir.length;
	
	$scope.addTarefa = function(){
		if ($scope.tarefa != null){	
			$scope.listaDeTarefasParaCumprir.push($scope.tarefa);
			$scope.progresso++;
			delete $scope.tarefa;
		}
	}
	
	$scope.removeTarefaCumprida = function(x){
		$scope.listaDeTarefasParaCumprir.splice(x,1);
		$scope.progresso--;
	}
	
	$scope.limparListaParaCumprir = function(){
		$scope.progresso = $scope.listaDeTarefasCompletas.length;   
		$scope.listaDeTarefasParaCumprir = [];
	}
	
	$scope.marcarTarefa = function(x){
		$scope.listaDeTarefasCompletas.push($scope.listaDeTarefasParaCumprir[x]);
		$scope.listaDeTarefasParaCumprir.splice(x,1);
	}
	
	$scope.removeTarefaCompleta = function(x){
		$scope.listaDeTarefasParaCumprir.push($scope.listaDeTarefasCompletas[x]);
		$scope.listaDeTarefasCompletas.splice(x,1);
	}

	$scope.limparListaCompleta = function(){
		for (var i = $scope.listaDeTarefasCompletas.length - 1; i >= 0; i--) {
			$scope.listaDeTarefasParaCumprir.push($scope.listaDeTarefasCompletas[i]);
		};
		$scope.listaDeTarefasCompletas = [];
	}


});
