var mobileShop = angular
				.module("shopModule", [])
				
				.controller("mobiles",function($scope){
					var mobiles = [
						{brand: "Sony" ,model: "Xperia" , year:2013 ,memory:16 , color:"Gold" , sim:true ,nfc:true ,network:"4G" ,screan:5 },
						{brand: "Samsung" ,model: "Note" , year:2014 ,memory:32 , color:"Black" , sim:true ,nfc:false ,network:"3G" ,screan:6},
						{brand: "Apple" ,model: "SE" , year:2016 ,memory:16 , color:"White" , sim:true ,nfc:false ,network:"4G" ,screan:4},
						{brand: "Nokia",model: "E71" , year:2009 ,memory:16 , color:"Black" , sim:true ,nfc:false ,network:"3G" ,screan:4},
						{brand: "LG",model: "G4" , year:2015 ,memory:64 , color:"White" , sim:true ,nfc:true ,network:"4G" ,screan:6}
					];
					
					$scope.mobiles = mobiles;
				});