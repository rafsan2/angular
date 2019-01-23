var myApp = angular.module("myApp", []);

myApp.controller("myController", function($scope) {
    console.log("In myController...");

    $scope.newUser = {};
    $scope.clickedUser = {};
    $scope.message = "";

    $scope.users = [
        {username: 'Rafsan', fullName: 'MD. Rafsan Ul Karim', email: 'rafsan2@gmail.com'},
        {username: 'kawser', fullName: 'Kawser Ahmed', email: 'kawser6251@hotmail.com'},
        {username: 'pial004', fullName: 'Tanvirul Alam Chowdhury', email: 'pial004@hotmail.com'}
    ];

    $scope.saveUser = function() {
        //console.log($scope.newUser);
        $scope.users.push($scope.newUser);
        $scope.newUser = {};
        $scope.message = "You have successfully added an user."
    };

    $scope.selectUser = function(user) {
        console.log(user);
        $scope.clickedUser = user;
    };

    $scope.updateUser = function() {
        $scope.message = "You have edited an user information."
    };
    
    $scope.deleteUser =function() {
        $scope.users.splice($scope.users.indexOf($scope.clickedUser), 1);
        $scope.message = "You have deleted an user."
    };

    $scope.clearMessage = function() {
        $scope.message = "";
    };
});