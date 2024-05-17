app.controller("AdminController", function($scope,$rootScope,$http,$routeParams){
    if($scope.subjects){
        $rootScope.Quizzs = $scope.subjects.find((sub) => sub.id === $routeParams.subId).Quizzs;
        $scope.subject = $scope.subjects.find((sub) => sub.id === $routeParams.subId);
    }

    $scope.addAnswer = function(indexQuizz){
        var newIdQuizz = $rootScope.Quizzs[indexQuizz].Answers[$rootScope.Quizzs[indexQuizz].Answers.length - 1].id + 1;
        $rootScope.Quizzs[indexQuizz].Answers.push({id: newIdQuizz});
    }

    $scope.removeAnswer = function(indexQuizz){
        $rootScope.Quizzs[indexQuizz].Answers.pop();
    }
    
    $scope.deleteAnswer = function(qId){
        $rootScope.Quizzs = $rootScope.Quizzs.filter((q) => q.id !== qId); 
    }

    $scope.saveQuizzs = function(){
        $http.patch("http://localhost:3000/subjects/"+$routeParams.subId, $scope.subject).then((res) => {
            console.log(res.data);
        })
    }
    $scope.addQuizz = function(){
        var newIdQuizz = $rootScope.Quizzs[$rootScope.Quizzs.length -1].id+1;
        // console.log(newIdQuizz);
        $rootScope.Quizzs.push({id: newIdQuizz, Marks: 1, Answers: [{id: 0}]})
    }
})