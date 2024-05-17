app.controller("listSubjectsController", function($scope, $http, $rootScope){
    $scope.loadData = function(){
        $http.get("http://localhost:3000/subjects")
        .then(res => {
            $rootScope.subjects = res.data;
        })
    }
    $scope.loadData()
})