app.controller("FechamentoController",function($scope,$http){
    console.log("Fechamento Controller...");
    
    let findAll = function(){
        console.log("findAll");
        let promisse = $http.get("http://localhost:8888/api/user/fechamentos/finaAll");
        promisse.then(function(response){
            console.log(response);
            $scope.fechamentos = response.data;
        },function(error){
            console.log(error);
        });
    }

    

    $scope.limpar = function(){
        console.log("limpar o volante");
        
        $scope.itens = [
			 {num:1,checked:false,estado:0, escolhido:false},
			 {num:2,checked:false,estado:0, escolhido:false},
			 {num:3,checked:false,estado:0, escolhido:false},
			 {num:4,checked:false,estado:0, escolhido:false},
			 {num:5,checked:false,estado:0, escolhido:false},
			 {num:6,checked:false,estado:0, escolhido:false},
			 {num:7,checked:false,estado:0, escolhido:false},
			 {num:8,checked:false,estado:0, escolhido:false},
			 {num:9,checked:false,estado:0, escolhido:false},
			 {num:10,checked:false,estado:0, escolhido:false},
			 {num:11,checked:false,estado:0, escolhido:false},
			 {num:12,checked:false,estado:0, escolhido:false},
			 {num:13,checked:false,estado:0, escolhido:false},
			 {num:14,checked:false,estado:0, escolhido:false},
			 {num:15,checked:false,estado:0, escolhido:false},
			 {num:16,checked:false,estado:0, escolhido:false},
			 {num:17,checked:false,estado:0, escolhido:true},
			 {num:18,checked:false,estado:0, escolhido:false},
			 {num:19,checked:false,estado:0, escolhido:false},
			 {num:20,checked:false,estado:0, escolhido:false},
			 {num:21,checked:false,estado:0, escolhido:false},
			 {num:22,checked:false,estado:0, escolhido:false},
			 {num:23,checked:false,estado:0, escolhido:false},
			 {num:24,checked:false,estado:0, escolhido:false},
			 {num:25,checked:false,estado:0, escolhido:false}
		 ];
		 
		 initColors();
		 $scope.selecionadas = 0;
    }
    
    
    $scope.itens = [
		 {num:1,checked:false,estado:0, escolhido:false},
		 {num:2,checked:false,estado:0, escolhido:false},
		 {num:3,checked:false,estado:0, escolhido:false},
		 {num:4,checked:false,estado:0, escolhido:false},
		 {num:5,checked:false,estado:0, escolhido:false},
		 {num:6,checked:false,estado:0, escolhido:false},
		 {num:7,checked:false,estado:0, escolhido:false},
		 {num:8,checked:false,estado:0, escolhido:false},
		 {num:9,checked:false,estado:0, escolhido:false},
		 {num:10,checked:false,estado:0, escolhido:false},
		 {num:11,checked:false,estado:0, escolhido:false},
		 {num:12,checked:false,estado:0, escolhido:false},
		 {num:13,checked:false,estado:0, escolhido:false},
		 {num:14,checked:false,estado:0, escolhido:false},
		 {num:15,checked:false,estado:0, escolhido:false},
		 {num:16,checked:false,estado:0, escolhido:false},
		 {num:17,checked:false,estado:0, escolhido:true},
		 {num:18,checked:false,estado:0, escolhido:false},
		 {num:19,checked:false,estado:0, escolhido:false},
		 {num:20,checked:false,estado:0, escolhido:false},
		 {num:21,checked:false,estado:0, escolhido:false},
		 {num:22,checked:false,estado:0, escolhido:false},
		 {num:23,checked:false,estado:0, escolhido:false},
		 {num:24,checked:false,estado:0, escolhido:false},
		 {num:25,checked:false,estado:0, escolhido:false}
	 ];
    
    $scope.check = function(item){
    	
    	console.log("check");
		 
		 if(item.estado == 0){
			 item.estado = 1;
			 item.color = "btn btn-purple btn-sq";
			 item.checked = true;
		 }else if(item.estado == 1){
			 if($scope.fechamentoSelecionado.habilitarFixas){
				 item.estado = 2;
				 item.color = "btn btn-black btn-sq";
				 item.checked = true;
			 }else{
				 item.estado = 0
				 item.color = "btn btn-light btn-sq";
				 item.checked = false;
				 if(item.escolhido){
					 item.color = "btn btn-secondary btn-sq";
				 }
			 }
		 }else if(item.estado == 2){
			 item.estado = 0
			 item.color = "btn btn-light btn-sq";
			 item.checked = false;
			 if(item.escolhido){
				 item.color = "btn btn-secondary btn-sq";
			 }
		 }
		 
		 
		 var select = $scope.itens.filter(function(item){
			 return item.checked;
		 });
		 $scope.selecionadas = select.length;
	 }
    
     let initColors = function(){
    	 
    	 console.log("initColors()");
    	 
		 $scope.itens.forEach(function(item){
			 if(item.escolhido == true){
				 if($scope.habilitarSelecionada){
					 item.color = "btn btn-secondary btn-sq";
				 }else{
					 item.color = "btn btn-light btn-sq";
				 }
			 }else{
				 item.color = "btn btn-light btn-sq";
			 }
		 });
	 }
     
     $scope.palpite = function(){
		 //console.log($scope.fechamentoSelecionado);
		 //console.log($scope.fechamentoSelecionado);
		 //alert("dezena fixa: " + $scope.fechamentoSelecionado);
		 $scope.limpar();
		 //console.log($scope.fechamentoSelecionado);
		 if($scope.fechamentoSelecionado.id == -1){
			 alert("Voce precisa selecionar um fechamento.");
		 }else{
			 var qtde = $scope.fechamentoSelecionado.quantidade;
			 if(qtde == 0){
				 qtde = 15;
			 }
			 if(qtde == null){
				 qtde = 15;
			 }
			 LotogainServices.fechamentoGerarNumeros(qtde).then(function(response){
				 
				 $scope.itens.forEach(function(item){
					 item.checked = false;
				 });
				 
				 var data = response.data;
				 data.forEach(function(value){
					 
					 var result = $scope.itens.filter(function(item){
						 return item.num == value
					 })[0].checked = true;
					 
				 });
				 
				 $scope.selecionadas = $scope.itens.filter(function(item){return item.checked}).length;
				 
				 $scope.itens.forEach(function(item){
					 if(item.checked){
						 renderColor(item);
					 }
				 });
			 },function(error){
				 console.log(error);
			 });
		 }
	 }	
     
     let _fechamentoGerarNumeros = function(qtde){
			var settings = {
				"async": true,
				"crossDomain": true,
				"url": baseUrl + "/fechamentos/gerarnumeros/"+qtde, // TODO: mudar apara api/user/fechamentos
				"method": "GET",
				"headers": {
				  "Accept": "application/json",
				  "Authorization": "Basic dXNlcjoxMjMxMjM=",
				  "cache-control": "no-cache",
				  "Postman-Token": "f19450b3-438e-4eb4-863f-67fab2385878"
				}
			  }
			return $http(settings)
	}
    
    findAll();
    initColors();
    
});