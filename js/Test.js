// var bsTestModal = new bootstrap.Modal(document.getElementById('TestModal'));
app.controller("testTestController", function($scope, $http, $rootScope, $interval){
        // $scope.arrQuizz = 

        $scope.questions = $scope.arrQuizz
        $scope.quizz = $scope.Quizzs
        $scope.startQuizz = function () {
            $scope.countDown = 10;
            $scope.countDown = $interval(function() {
                $scope.countDown--;
            },1000);
        }

        $scope.getCorrect = function (quesIndex,correctId,ansId) {
            if($scope.listAnswer === undefined){
                $scope.listAnswer = [];
            }
            $scope.listAnswer[quesIndex] = { 
                chosseId: ansId
                ,correctId: correctId}
        }

        $scope.getResult = function (){
            $scope.colorResult = $scope.listAnswer; 
            console.log( $scope.colorResult);
            var truevalues = $scope.colorResult.filter(function(element){
                return(element.chosseId === element.correctId);
            })
            $scope.count = truevalues.length
            $interval.cancel($rootScope.countDownInterval);
            // console.log($scope.count)
            
        }
})