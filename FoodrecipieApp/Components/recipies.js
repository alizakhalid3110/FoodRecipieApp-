import React from "react";
import { View, Text , Image, TouchableOpacity, ScrollView} from "react-native";
import MasonryList from '@react-native-seoul/masonry-list';
import { categories } from "../Categories";
import { useNavigation } from "@react-navigation/native";


const Recipies = ({data})=>{


    const navigation = useNavigation();

    return(
        
        <View style={{
            marginLeft:20
        }}>
            <Text  
            style={{
                fontSize:20, fontWeight:'bold'
            }}
            >Recipies</Text>
<View 

style={{
    
            flexDirection: "row",
            
            flexWrap: "wrap",
            justifyContent: "space-between", // space between items in a row
            padding: 15
        }}>
            {
                data.map((item, index) => (
                    <View >


                        <TouchableOpacity key={index} onPress={()=>navigation.navigate('MenuDesc',{...item})} >
                            <View  key={index}  style={{
                                backgroundColor: 'white', height: 200, width: 160
                                , borderBottomColor: 'black', alignItems: 'center', justifyContent: 'center',
                                borderRadius: 10, marginBottom: 20,elevation:7

                            }}>
                                <Image source={{ uri: item.strMealThumb
 }}
                                    style={{ height: 150, width: '90%', marginTop: '5%', borderRadius:5 }}
                                />
                                <Text style={{
                                    marginTop: '5%',
                                    fontWeight: 'bold'
                                }}>{item.strMeal.length > 15? item.strMeal.slice(0, 15)+'...':item.strMeal
}</Text>

                            </View>
                        </TouchableOpacity>
                    </View>
                ))
            }
        </View>

        </View>
        
    )
};

 
export default Recipies;