import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Home,Profile} from "./screens";

const Tab = createBottomTabNavigator();
const App = () => {
    return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Home}/>
            <Tab.Screen name='Profile' component={Profile}/>
        </Tab.Navigator>
    </NavigationContainer>
    );
};

export default App;