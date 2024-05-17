var bsLoginModal = new bootstrap.Modal(document.getElementById('loginModal'));

app.controller("LoginController", function($scope, $http, $rootScope, $timeout){
    $scope.loadData = function(){
        $http.get("http://localhost:3000/Login")
        .then(res => {
            $scope.users = res.data;
            // console.log($scope.users);
        })
    }
    $scope.loadData()
    
    $scope.loginBtn = function (){
        bsLoginModal.show();
        if($rootScope.user = $scope.users.find((us) => us.email === $scope.email)){
            if($scope.user.pass === $scope.pass){
                $rootScope.errorMessage = "Login successful"
                $timeout(()=>{
                    // $location.path("/home");
                    history.back();
                    bsLoginModal.hide()
                    $rootScope.isLogin = true;
                }, 1000);
            } else {
                $rootScope.errorMessage = "Your password is not correct! please check again"
            }
        } else {
            $rootScope.errorMessage = "Email not found"
        }
        //  else{
        //     // alert("error email");
        //  }   
        // if($scope.user = $scope.users.find((us) => us.pass === $scope.pass)){
        //     alert("true pass");
        // } else {
        //     alert("wrong pass");
        // }
    }
})