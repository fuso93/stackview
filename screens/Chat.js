import React from 'react';
import {View,Text, Button} from "react-native";
import {useNavigation} from "@react-navigation/native";

const Chat = () => {

    const navigation = useNavigation();
    return (
        <View>
            <Text>Chat</Text>
            <Button
                title={'button'}
                onPress={() => navigation.navigate("ChatDetail", {title : "dfaf"})}
            />
        </View>
    );
};

export default Chat;