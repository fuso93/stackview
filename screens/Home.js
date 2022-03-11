import React, {useState,useEffect} from 'react';
import {ScrollView,View,Text, Button} from "react-native";
import {useNavigation} from "@react-navigation/native" //화면 옮겨주는 훅
import axios from 'axios';
import {COLORS, SIZES} from "./constants";

const Home = () => {

    const navigation = useNavigation();
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
        <ScrollView>
                {tvs.map((tv) => (
                    <View
                        key={tv.id}
                        style={{
                            flex:1,
                            alignItems:'center',
                            justifyContent:'center',
                            margin:5
                        }}
                    >
                        <Text
                            style={{
                                color: COLORS.lightOrange ,
                                fontSize:SIZES.body4
                            }}
                        >
                            {tv.original_name}
                        </Text>
                        <Text style={{fontSize:SIZES.base}}>
                            {tvs.overview}
                        </Text>
                        <Button title={'자세히 보기'}
                                color={"#194ff"}
                            onPress={() => navigation.navigate("Detail", { id:tv.id})}
                        />
                    </View>
                ))}

        </ScrollView>
    );
};

export default Home;