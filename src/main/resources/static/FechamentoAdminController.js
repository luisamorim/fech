app.controller("FechamentoAdminController",function($scope,$http){
	console.log("Admin Controller");
	
	$scope.cadastrar = function(fechamento){
		console.log(fechamento);
		save(fechamento);
	}
	
	let save = function(fechamento){
		let promisse = $http.post("http://localhost:8888/api/user/fechamentos/save",fechamento);
		promisse.then(function(response){
			alert("Fechamento salvo com sucesso!");
			$scope.fechamento = {};
		},function(error){
			alert("Erro ao salvar fechamento");
		});
	}
	
	let findAllDtos = function(){
		let promisse = $http.get("http://localhost:8888/api/user/fechamentos/finaAllDtos");
		promisse.then(function(response){
			console.log(response);
			$scope.fechamentos = response.data;
		},function(error){
			alert("Erro ao buscar os fechamentos");
		});
	}
	
	$scope.findAllDtos = findAllDtos;
	
});