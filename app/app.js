var noteApp = angular.module('noteApp', ['ngStorage']);

noteApp.controller('toDoNoteController', function( $scope , $localStorage) {
    
    if($localStorage.post!=null){
        $scope.posts =  $localStorage.post ;  
        }
    else{
        $scope.posts = [];
    }
       
    /*
     add a new note and stored into localstorage
    */
    $scope.addPost = function(){
        var postObject = {
           content  : $scope.content,
           comments : [],
           likes: 0,
           commentIsOpen: false,
        }
        $scope.posts.unshift(postObject);
        $localStorage.post = $scope.posts;
        $scope.content  = "";
        return false;
    }
    
    $scope.openComment = function(post){
    if($scope.posts[$scope.posts.indexOf(post)].commentIsOpen){
            $scope.posts[$scope.posts.indexOf(post)].commentIsOpen = false;
    }
        else{
$scope.posts[$scope.posts.indexOf(post)].commentIsOpen = true;
        }
    }
    
    $scope.postComment = function(post){ $scope.posts[$scope.posts.indexOf(post)].comments.unshift(post.latestComment);    
      $localStorage.post = $scope.posts;  
      post.latestComment = '';
    }

    $scope.likeUpdate = function(post){
        $scope.posts[$scope.posts.indexOf(post)].likes++ ;
        $localStorage.post = $scope.posts ;
    } 
});
