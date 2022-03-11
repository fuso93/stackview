import React from 'react';
import {View, Text} from "react-native";
import {useRoute} from "@react-navigation/native";


const ProfileNewpage = () => {

    const route = useRoute();
    return (
        <View>
            <Text>
                {route.params.name}
            </Text>

        </View>

    );
};

export default ProfileNewpage;