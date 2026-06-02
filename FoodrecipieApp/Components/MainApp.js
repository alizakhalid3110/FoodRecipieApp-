import React from "react";
import { View, Text } from "react-native";
import { useState, useEffect } from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";



import Home from "./FoodrecipieApp/Screens/Home";
import Welcome from "./FoodrecipieApp/Screens/Welcome";
import MenuDesc from "./FoodrecipieApp/Screens/menudesc";


const Stack = createNativeStackNavigator();



const Main =({navigation})=>{






    return(
        <NavigationContainer>
<Stack.Navigator screenOptions={{
  headerShown:false
}}>
       <Stack.Screen name="Welcome" component={Welcome}/>
     <Stack.Screen name="Home" component={Home}/>
     <Stack.Screen name="MenuDesc" component={MenuDesc}/>
    
 
</Stack.Navigator>
        </NavigationContainer>
    )
};





export default Main;