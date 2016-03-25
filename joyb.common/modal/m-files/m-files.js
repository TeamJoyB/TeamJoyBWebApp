angular.module('joyb.common').controller('MFilesCtrl',function($scope, files, JoYbUtils){

    $scope.files = files;

    $scope.addNewFile = function(){
      files.push("newfile" + JoYbUtils.guid());  
    };
});