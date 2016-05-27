
var mobiles = [
				{brand: "Sony" ,model: "Xperia L" , year:2013 ,memory:16 , color:"Gold" , sim:"Yes" ,nfc:"Yes" ,network:"4G" ,screen:5 },
				{brand: "Samsung" ,model: "Note 3" , year:2014 ,memory:32 , color:"Black" , sim:"Yes" ,nfc:false ,network:"3G" ,screen:6},
				{brand: "Apple" ,model: "6S" , year:2015 ,memory:16 , color:"White" , sim:"Yes" ,nfc:false ,network:"4G" ,screen:4},
				{brand: "Nokia",model: "E71" , year:2009 ,memory:16 , color:"Black" , sim:"Yes" ,nfc:false ,network:"3G" ,screen:4},
				{brand: "LG",model: "G4" , year:2015 ,memory:16 , color:"White" , sim:"Yes" ,nfc:"Yes" ,network:"4G" ,screen:6},
				{brand: "Sony" ,model: "Xperia M" , year:2013 ,memory:16 , color:"Gold" , sim:"Yes" ,nfc:"Yes" ,network:"4G" ,screen:5 },
				{brand: "Samsung" ,model: "Note 4" , year:2015 ,memory:32 , color:"Black" , sim:"Yes" ,nfc:false ,network:"3G" ,screen:6},
				{brand: "Apple" ,model: "SE" , year:2016 ,memory:64 , color:"Gold" , sim:"Yes" ,nfc:false ,network:"4G" ,screen:4},
				{brand: "Nokia",model: "Lumia" , year:2014 ,memory:32 , color:"White" , sim:"Yes" ,nfc:"Yes" ,network:"4G" ,screen:6},
				{brand: "LG",model: "G5" , year:2016 ,memory:64 , color:"Black" , sim:"Yes" ,nfc:"Yes" ,network:"4G" ,screen:6}
				];

				
var mobileShop = angular
				.module("shopModule", [])
				.controller("mobiles",function($scope){					
					$scope.mobiles = mobiles;
					$scope.showDetails = true;
					$scope.addScreenStatus = false;
					// Search 					

					$scope.search = function(){
						model = $scope.modelSearch;
						brand = $scope.brandSearch;
						$scope.tempModel = model;
						$scope.tempBrand = brand;
			
					};
					
					// Clear for Next search
					$scope.clear = function(){
						$scope.tempModel = "";
						$scope.tempBrand = "";
						$scope.showDetails = true;
					};
					
					

					$scope.setSelected = function(){
						$scope.setSelected = function() {
					        $scope.selected = this.mobile;       
					        //return $scope.selected
					        //alert($scope.showDetails);
					        $scope.tempModel1 =$scope.tempModel;
					        $scope.tempBrand1 =$scope.tempBrand;
						    $scope.showDetails = false;
					        
					    };
					};
					//$scope.addBrand = "";
					$scope.save = function(){
						$scope.mobiles.push({
							brand:$scope.addBrand,
							model: $scope.addModel,
							year:$scope.addYear,
							memory:16,
							color:$scope.addColor,
							sim:$scope.addDual ? "Yes" : "No",
							nfc:$scope.addNfc ? "Yes" : "No",
							network:$scope.add4G ? "4G" : "3G",
							screen:$scope.addScreen
						})
						$scope.back();
					};
					
					$scope.showAddScreen = function(){
						$scope.addScreenStatus = true;
					}
					
					$scope.back = function(){
						$scope.addScreenStatus = false;
					}
				});
				
				
