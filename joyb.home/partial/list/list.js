angular.module('joyb.home').controller('ListCtrl',function($scope){

	$scope.postings = [
      {
          id: 1,
          title: "SAP Junior Developer",
          colorCode: "#E91E63",
          location: "Toronto",
          area: "GTA",
          tags:[ "#WFH"]
          
      },
      {
          id: 2,
          title: "SAP Intermediate Developer",
          colorCode: "#E91E63",
          location: "Ottawa",
          area: "Downtown",
          tags:[ "#WFH", "#flexhours"]
        
      },
      {
          id: 3,
          title: "SAP Senior Developer",
          colorCode: "#E91E63",
          location: "Toronto",
          area: "GTA",
          tags:[ "#WFH", "#remote", "#flexhours"],
          resume: "SAPBO"
          
      },
      {
          id: 4,
          title: "Junior Business Analyst",
          colorCode: "#3F51B5",
          location: "Toronto",
          area: "GTA",
          tags:[ "#flexhours"]
          
      },
      {
          id: 5,
          title: "Intermediate Business Analyst",
          colorCode: "#3F51B5",
          location: "Ottawa",
          area: "Kanata",
          tags:[ "#remote", "#flexhours"]
          
      },
      {
          id: 6,
          title: "Senior Business Analyst",
          colorCode: "#3F51B5",
          location: "Ottawa",
          area: "Downtown",
          tags:[ "#WFH", "#remote", "#flexhours"]
          
      }
	  ];


});