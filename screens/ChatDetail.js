import React from 'react';
import {View,Text} from "react-native";
import {useRoute} from "@react-navigation/native";

const ChatDetail = () => {

    const route = useRoute();
    return (
        <View>
            <Text> {route.params.title}</Text>

        </View>
    );
};

export default ChatDetail;