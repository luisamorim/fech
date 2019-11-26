var app = angular.module("app",['ngRoute']);



app.config(function($routeProvider){
    $routeProvider
    .when("/fechamentos",{
        templateUrl: "fechamentos/fechamentos.html",
        controller: "FechamentoController"
    })
    
    .when("/fechamentosadmin",{
        templateUrl: "fechamentos/fechamentosadmin.html",
        controller: "FechamentoAdminController"
    })
    ;
});