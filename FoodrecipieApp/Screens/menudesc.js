import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, ImageBackground, TouchableOpacity, ActivityIndicator } from "react-native";
import { ChevronLeftIcon, HeartIcon , ClockIcon, FireIcon, UserIcon} from "react-native-heroicons/solid";





const MenuDesc = (props, )=>{
       
 
    const ingredientsIndexes = (recipieData)=>{
        if(!recipieData) return [];
        let indexes = [];
        for(let i =1; i<=20; i++){
            if(recipieData['strIngredient'+i]){
                indexes.push(i);
           
            }

        }
             return indexes;
    }
    const [loading, setLoading]= useState(true);

    const [recipieData, setRecipieData] = useState([]);
   const getRecipie = async (id)=>{
     const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
     const res = await fetch(url);
     const data =   await res.json();
  console.log(data);
     setRecipieData(data.meals[0]);
     
     setLoading(false);
    
   };

   useEffect(()=>{
    getRecipie(item.idMeal);
   },[]);

const [favourite, setFavourite]= useState(false)
    const navigation = useNavigation();
    const item = props.route.params;
    return(
<ScrollView>
    <View style={{
        padding:8, marginTop:10
    }}>
        <ImageBackground 
        source={{uri:item.strMealThumb}} style={{
            height:320, width:370,  borderRadius:20
        }}>
            <View style={{
                flexDirection:'row', justifyContent:'space-between',padding:10
            }}>
                <TouchableOpacity  onPress={()=>navigation.goBack()} style={{
                    marginTop:20,  backgroundColor:'white', padding:6, borderRadius:50, height:40, width:40,
                    alignItems:'center', justifyContent:'center'
                }}>
<ChevronLeftIcon size={24}  color={'#e69224ff'}/>
                </TouchableOpacity>
                       <TouchableOpacity onPress={()=>setFavourite(!favourite)}  style={{
                    marginTop:20, marginLeft:20, backgroundColor:'white', padding:6, borderRadius:50, height:40, width:40,
                    alignItems:'center', justifyContent:'center'
                }}>
<HeartIcon size={24}  color= {favourite ? 'orange': 'gray'}/>
                </TouchableOpacity>

            </View>

        </ImageBackground>
        {
            loading ? (
                <ActivityIndicator style={{
                    color:'orange', size:200, marginTop:20
                }}/>
            ):(
                <View style={{
                    marginLeft:20
                }}>

                     <Text style={{
                            marginTop:30, marginBottom:5, fontSize:20, fontWeight:'bold'
                        }}>
                            {item.strMeal}
                        </Text>                           <Text style={{
                             marginBottom:15, color:'gray', marginLeft:6
                        }}>
                            {recipieData.strArea}
                        </Text>
                    <View style={{
                         flexDirection:'row',padding:5, justifyContent:'space-between', marginRight:30
                    }}>
                   
                      
                        <View style={{
                            backgroundColor:'#e69224ff',
                            borderRadius:35,padding:10, width:50
                        }}>
                       <View style={{
                        backgroundColor:'white', alignItems:'center',  padding:5, borderRadius:35


                       }}>
                        <ClockIcon color={'black'} size={24}/>
                       </View>
                       <Text style={{
                        fontWeight:'bold',textAlign:'center', fontSize:12, marginTop:1
                       }}>15</Text>
                        <Text style={{
                        fontWeight:'bold',textAlign:'center', fontSize:12, marginBottom:2
                       }}>mins</Text>

                        </View>
                         <View style={{
                            backgroundColor:'#e69224ff',
                            borderRadius:35,padding:10, width:50
                        }}>
                       <View style={{
                        backgroundColor:'white', alignItems:'center',  padding:5, borderRadius:35


                       }}>
                        <FireIcon color={'black'} size={24}/>
                       </View>
                       <Text style={{
                        fontWeight:'bold',textAlign:'center', fontSize:12, marginTop:1
                       }}>12</Text>
                        <Text style={{
                        fontWeight:'bold',textAlign:'center', fontSize:12, marginBottom:2
                       }}>cal</Text>

                        </View>
                         <View style={{
                            backgroundColor:'#e69224ff',
                            borderRadius:35,padding:10, width:50
                        }}>
                       <View style={{
                        backgroundColor:'white', alignItems:'center',  padding:5, borderRadius:35


                       }}>
                        <UserIcon color={'black'} size={24}/>
                       </View>
                       <Text style={{
                        fontWeight:'bold',textAlign:'center', fontSize:12, marginTop:1
                       }}>15</Text>
                        <Text style={{
                        fontWeight:'bold',textAlign:'center', fontSize:12, marginBottom:2
                       }}>serv</Text>

                        </View>
                         <View style={{
                            backgroundColor:'#e69224ff',
                            borderRadius:35,padding:10, width:50
                        }}>
                       <View style={{
                        backgroundColor:'white', alignItems:'center',  padding:5, borderRadius:35


                       }}>
                        <ClockIcon color={'black'} size={24}/>
                       </View>
                       <Text style={{
                        fontWeight:'bold',textAlign:'center', fontSize:12, marginTop:1
                       }}>15</Text>
                        <Text style={{
                        fontWeight:'bold',textAlign:'center', fontSize:12, marginBottom:2
                       }}>mins</Text>

                        </View>
        




                    </View>
                     <Text style={{
                            marginTop:30, marginBottom:15, fontSize:20, fontWeight:'bold'
                        }}>
                            Ingredients
                        </Text>
                        {
                            ingredientsIndexes(recipieData).map((index)=>{
                                return(
                                    <View key={index} style={{
                                        flexDirection:'row'
                                    }}>
                                        <View style={{
                                            backgroundColor:'orange', height:10, width:10, borderRadius:10
                                        }}></View>
                                      <Text style={{
                                        fontWeight:'bold'
                                      }}>  {recipieData['strIngredient'+index]},</Text>
                                                 <Text style={{
                                     
                                      }}>  {recipieData['strMeasure'+index]},</Text>

                                    </View>
                                )
                            })
                        }
                                             <Text style={{
                            marginTop:30, marginBottom:15, fontSize:20, fontWeight:'bold'
                        }}>
                            Instructions
                        </Text>
                        <Text 
                        style={{
                            marginBottom:100
                        }}>{recipieData.strInstructions}</Text>
                    </View>
            )
        }
    </View>
    </ScrollView>

    )
};

export default MenuDesc;