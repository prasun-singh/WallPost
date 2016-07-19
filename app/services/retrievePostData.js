noteApp
.factory('retrievePostData', function ($http) {
    return {
        get: function () {
            return $http.get('/app/postData.json');
        },
        post : function(updatedData){
              return $http.post('/app/postData.json','updatedData');
    }
    };
});