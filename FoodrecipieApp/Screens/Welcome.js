import React from "react";
import { View, Text, Image } from "react-native";
import { useEffect } from "react";





const Welcome =({navigation})=>{
    useEffect(()=>{
    
    setTimeout(()=>
    navigation.navigate('Home'),2000);
    
    
    
    },[])
    return(
<View  
style={{
    backgroundColor: '#e69224ff', flex:1, alignItems:'center'
}}
>
<Image  source={require('../../assets/food.png')} style={{
    height:300, width:300, borderRadius:50, marginTop:'60%'
}}/>
<Text style={{
    color:'white', fontSize:40, fontWeight:'bold'
}}
>Foody</Text>
<Text style={{
    color:'white', marginTop:20,fontSize:16
}}>Food is always Right</Text>

</View>

    )
};





export default Welcome;