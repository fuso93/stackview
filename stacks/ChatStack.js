import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Chat,ChatDetail} from "../screens";


const Stack = createNativeStackNavigator();

const ChatStack = () => {
    return (
       <Stack.Navigator>
           <Stack.Screen name='Chat' component={Chat}/>
           <Stack.Screen name='ChatDetail' component={ChatDetail}/>
       </Stack.Navigator>
    );
};

export default ChatStack;