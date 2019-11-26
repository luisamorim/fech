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

    findAll();

    $scope.limpar = function(){
        console.log("limpar o volante");
    }
    
});