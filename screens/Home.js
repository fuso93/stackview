import React, {useState,useEffect} from 'react';
import {View,Text} from "react-native";
import axios from 'axios';
const Home = () => {

    //1.그릇
    const [tvs, setTvs] = useState([])


    //3. 네트워킹 & 파싱
    const getTVData = async() => {
        //4. 네트워킹
        try{
         const {data,status} = await axios.get("https://api.themoviedb.org/3/tv/airing_today?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US&page=1")
        setTvs(data.results)

        } catch(err) {
            alert(err.response.data.message)
        }
   }

    //2.
    useEffect(() => {
        getTVData()
     }, []);


    return (
        <View
            style={{
                flex:1,
                justifyContent:'center',
                alignItems:'center'
            }}
        >
                {tvs.map((tv) => (
                    <Text key={tv.id}> {tv.original_name} </Text>
                ))}

        </View>
    );
};

export default Home;