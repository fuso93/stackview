import React from 'react';
import {View, Text,Button} from "react-native";
import {useNavigation} from '@react-navigation/native';


const Profile = () => {

    const navigation = useNavigation();

    return (
        <View>
            <Text> PROFILE</Text>
            <Button
                title={'뭐하기'}
                onPress={() => navigation.navigate("ProfileDetail", {name:'데이터 던져줌'})}/>
        </View>
    );
};

export default Profile;