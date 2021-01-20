/*
* power by Sucdaze 2018/7/19
*
* */


var KisBpmFormTypeSelectCtrl = [ '$scope', '$translate','$rootScope', '$http', function($scope, $translate,$rootScope ,$http) {



    $scope.formTypeIsOnChanged = function () {
        console.log("!@!@!@!@!",$scope.property);
        $rootScope.formType = $scope.property.value;
        $scope.updatePropertyInModel($scope.property);
    };


}];