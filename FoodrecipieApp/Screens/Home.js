import React from "react";
import { View, Text , Image, TextInput, ScrollView} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BellIcon } from "react-native-heroicons/outline";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Categories from "../Components/categoriesf";
import { useState } from "react";
import { useEffect } from "react";
import Recipies from "../Components/recipies";







const Home =()=>{
    const [activeCategory, setActiveCategory] = useState('meal');
    const [Mealdata, setMealdata] = useState([]);
    const [recipies, setRecipies] = useState([]);
    const [searchCategory, setSearchCategory]=useState('beef');



const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';

const fetchCategories = async() =>{
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setMealdata(data.categories);
};

useEffect(() => {
  // Run only when searchCategory changes and is not null/undefined
  if (searchCategory) {
    fetchMeal();
  }
}, [searchCategory]);


useEffect(()=>{
    fetchCategories();
},[])

//url for categories
const url2 = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${searchCategory}`;
const fetchMeal = async()=>{
    const res = await fetch(url2)
    const data2 = await res.json()
    console.log(data2);
    setRecipies(data2.meals)
}


    return(
<SafeAreaView>
    <ScrollView>
    <View>
        <View  style={{
            marginTop:15,marginLeft:10, flexDirection:'row', justifyContent:'space-between'
        }}>
            <Image  source={{uri:'https://t4.ftcdn.net/jpg/03/26/98/51/360_F_326985142_1aaKcEjMQW6ULp6oI9MYuv8lN9f8sFmj.jpg'}}
            
            style={{
                height:40, width:40, borderRadius:35
            }}
            
            
            />
            <BellIcon size={30} color={''} style={{
            marginRight:20}}/>
        </View>
        <View style={{
            marginTop:20,
            marginLeft:20,
            marginRight:40
        }}>
            <Text 
            style={{
                color:'gray', fontSize:20,lineHeight:30
            }}
            
            >Hello! Zain</Text>
              <Text 
            style={{
                 fontSize:25, marginTop:10, fontWeight:'bold'
            }}
            
            >Make your own food,{" "}
            <Text style={{
                fontSize:25, fontWeight:'bold', lineHeight:40
            }}>stay at </Text>{" "}
            <Text style={{
                fontSize:25, fontWeight:'bold', color:'#e69224ff'
            }}>home</Text>
            </Text>
            

        </View>

        {/* //search bar */}
        <View style={{
            backgroundColor:'#e8e5e5ff', width:'92%', height:50, alignSelf:'center',marginTop:30, 
            borderRadius:30, flexDirection:'row', justifyContent:'space-between', padding:5
        }}>
            <TextInput 
            placeholder="search recepie"
            placeholderTextColor={'darkgray'}
            style={{
                marginLeft:10
            }}
            />
            <View  style={{
backgroundColor:'white', marginRight:10, padding:10, borderRadius:35, alignItems:'center', justifyContent:'center',
height:35, width:35,alignSelf:'center', elevation:10
            }}>
                <MagnifyingGlassIcon size={22} color={'darkgray'} style={{
                   
                }}  />
            </View>

            

        </View>
        {/* categories */}

            <View>
                <Categories activeCategory={activeCategory} setActiveCategory={setActiveCategory} Mealdata={Mealdata} 
                searchCategory={searchCategory} setSearchCategory={setSearchCategory}
                />
            </View>
            <View>
                <Recipies data ={recipies}/>
            </View>
    </View>
        </ScrollView>
</SafeAreaView>



    )
};





export default Home;