import React, {useEffect, useState} from 'react';
import {View,Text} from "react-native";
import {useRoute} from "@react-navigation/native";
import axios from 'axios';
import {SIZES} from "./constants";
import {Image} from "react-native";


const HomeDetail = () => {

    const route = useRoute();
    //1.
    const [tv, setTV] =useState({});
//3.
    const getTV = async () => {
        try{
            const {data, status} = await axios.get(`https://api.themoviedb.org/3/tv/${route.params.id}?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US`)
            setTV(data)
        } catch(err){
            alert(err.response.data.message)
        }
    }
//2.
    useEffect(() => {
        getTV();
    },[])
    return (
        <View style={{flex:1, alignItems:'center', marginVertical:10}}>
            <Text style={{fontSize:SIZES.h2}}>{tv.name} </Text>
            <Text style={{fontSize:SIZES.h4, margin:10}}>{tv.overview} </Text>
            <Text style={{fontSize:SIZES.h4, margin:10}}>{tv.first_air_date} </Text>
            <Image style={{width:300, height:300}} source={{uri:"https://image.tmdb.org/t/p/w500"+tv.poster_path}}/>
        </View>
    );
};

export default HomeDetail;