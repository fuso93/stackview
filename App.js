import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Profile} from "./screens";
import HomeStack from "./stacks/HomeStack";


const Tab = createBottomTabNavigator();
const App = () => {
    return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen
                name='Home'
                component={HomeStack}
                options={{
                    headerShown:false
                }}
            />
            <Tab.Screen name='Profile' component={Profile}/>
        </Tab.Navigator>
    </NavigationContainer>
    );
};

export default App;