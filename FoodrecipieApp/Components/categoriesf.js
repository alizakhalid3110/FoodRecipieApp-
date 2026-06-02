import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import {categories} from "../Categories";
const Categories = ({activeCategory, setActiveCategory, Mealdata,searchCategory ,setSearchCategory})=>{

    const Selecter = (item)=>{
        setActiveCategory(item);
        setSearchCategory(item)
    }
    return(
    <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{
        paddingHorizontal:25,
         alignItems: "center",  
         marginTop:30
    }}


    >
      {
        Mealdata.map((item, index)=>{
            return(
                <TouchableOpacity     onPress={()=>Selecter(item.strCategory)} key={index}      style={{
                              
                                marginRight: 30, 
                                alignItems: 'center', 
                                 
                                
                                
                            }}>
                                   <View key={index} style={{
                      backgroundColor:activeCategory == (item.strCategory) ? '#e69224ff' : '#e8e5e5ff',
                      padding:6, borderRadius:'50%'
                }}>
                        <Image source={{uri:item.strCategoryThumb}} style={{
                        height:40, width:40, borderRadius:35,
                       
                      

                    }}/>
                </View>
             
                    <Text>{item.strCategory}</Text>
                </TouchableOpacity>
            )
        })
      }
       </ScrollView>

    );
};



export default Categories;