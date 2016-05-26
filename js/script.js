var mobiles = [
						{brand: "Sony" ,model: "Xperia L" , year:2013 ,memory:16 , color:"Gold" , sim:true ,nfc:true ,network:"4G" ,screan:5 },
						{brand: "Samsung" ,model: "Note 3" , year:2014 ,memory:32 , color:"Black" , sim:true ,nfc:false ,network:"3G" ,screan:6},
						{brand: "Apple" ,model: "6S" , year:2015 ,memory:16 , color:"White" , sim:true ,nfc:false ,network:"4G" ,screan:4},
						{brand: "Nokia",model: "E71" , year:2009 ,memory:16 , color:"Black" , sim:true ,nfc:false ,network:"3G" ,screan:4},
						{brand: "LG",model: "G4" , year:2015 ,memory:16 , color:"White" , sim:true ,nfc:true ,network:"4G" ,screan:6},
						{brand: "Sony" ,model: "Xperia M" , year:2013 ,memory:16 , color:"Gold" , sim:true ,nfc:true ,network:"4G" ,screan:5 },
						{brand: "Samsung" ,model: "Note 4" , year:2015 ,memory:32 , color:"Black" , sim:true ,nfc:false ,network:"3G" ,screan:6},
						{brand: "Apple" ,model: "SE" , year:2016 ,memory:64 , color:"Gold" , sim:true ,nfc:false ,network:"4G" ,screan:4},
						{brand: "Nokia",model: "Lumia" , year:2014 ,memory:32 , color:"White" , sim:true ,nfc:true ,network:"4G" ,screan:6},
						{brand: "LG",model: "G5" , year:2016 ,memory:64 , color:"Black" , sim:true ,nfc:true ,network:"4G" ,screan:6}
					];

				
var mobileShop = angular
				.module("shopModule", [])
				.controller("mobiles",function($scope){					
					$scope.mobiles = mobiles;
					
						$scope.modelSearch = "";
					$scope.brandSearch = "";
					$scope.search = function(model,brand){
						model = $scope.modelSearch;
						brand = $scope.brandSearch;
						alert(model + " " + brand);	
					}
				})
				
				.controller("search", function($scope){
/*
					$scope.modelSearch = "";
					$scope.brandSearch = "";
					$scope.search = function(model,brand){
						model = $scope.modelSearch;
						brand = $scope.brandSearch;
						alert(model + " " + brand);	
					}
*/
				})