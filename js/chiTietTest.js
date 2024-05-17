function shuffe(arr){
    arr.sort(() => Math.random() - 0.5)  
}

function fancyTimeFormat(duration) {
    // Hours, minutes and seconds
    const hrs = ~~(duration / 3600);
    const mins = ~~((duration % 3600) / 60);
    const secs = ~~duration % 60;
  
    // Output like "1:01" or "4:03:59" or "123:03:59"
    let ret = "";
  
    if (hrs > 0) {
      ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }
  
    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
  
    return ret;
  }

app.controller("chiTietTestController", function($scope, $rootScope, $location, $routeParams, $interval){
    console.log(1);
    if($scope.subjects){
        $rootScope.Quizzs = $scope.subjects.find((sub) => sub.id === $routeParams.subId).Quizzs;
        $scope.subject = $scope.subjects.find((sub) => sub.id === $routeParams.subId);
    }
    $scope.startTest = function() {
        console.log(Math.ceil($scope.Quizzs.length/3))
        if(!$scope.isLogin){
            $location.path("/Login");  
        }
        if($scope.isLogin){
            $location.path("/Test")
            $rootScope.second = 1500;
            $rootScope.countDown = fancyTimeFormat($rootScope.second);
            $rootScope.countDownInterval = $interval(function() {
                $rootScope.second--;
                $rootScope.countDown = fancyTimeFormat($rootScope.second)
            },1000);
            
        }
        
    }

    $rootScope.randomQuizz = function() {
       if($rootScope.arrQuizz !== undefined){
            shuffe($rootScope.arrQuizz);
            console.log($scope.arrQuizz)
       }
    }

    $rootScope.getQuizz = function() {
        var numberOfQuizz = Math.floor($scope.Quizzs.length/3);
        if($scope.chossePartOfQuizzs === 1 && numberOfQuizz * 1 < $scope.Quizzs.length){ 
            $rootScope.arrQuizz = $scope.Quizzs.filter((quizz) => $scope.Quizzs.indexOf(quizz) < numberOfQuizz);
            console.log($scope.arrQuizz)
        } else if ($scope.chossePartOfQuizzs === 2 && numberOfQuizz * 2 < $scope.Quizzs.length){ 50 < 77
            $rootScope.arrQuizz = $scope.Quizzs.filter((quizz) => $scope.Quizzs.indexOf(quizz) >= numberOfQuizz && $scope.Quizzs.indexOf(quizz) < numberOfQuizz * 2);
            console.log($scope.arrQuizz)
        } else {
            $rootScope.arrQuizz = $scope.Quizzs.filter((quizz) => $scope.Quizzs.indexOf(quizz) >= numberOfQuizz * 2 && $scope.Quizzs.indexOf(quizz) < $scope.Quizzs.length)
            console.log($scope.arrQuizz)
        }
    }
})