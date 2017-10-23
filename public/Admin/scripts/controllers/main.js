/**
 *@author: Juan Camilo Peña Vahos
 *@description: Este controlador se encarga de las funciones de la vista main, por el momento solo activa un mensaje
 *@date: 17/07/2017
 *@Todo:
*       -->Implementar una función de conteo para que el mensaje de confirmación desaparezca
 */

'use strict';

app.controller('mainCtrl', function addController($scope, $routeParams) {    
   
    var ok = $routeParams.ok; //Se obtiene el parámetro de la URL
    if(ok == 1){//De acuerdo con el parámetro se muestra un mensaje o el otro
        $scope.success = !$scope.success;
    }else if(ok == 0){
        $scope.danger = !$scope.danger;
    }
    
});