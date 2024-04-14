import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../screens/Home';
import Listing from '../plp/listing';

const Stack = createStackNavigator();

function HomeNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={() => ({
                headerShown: false
            })} />
            <Stack.Screen name="Details" component={Listing} options={() => ({
                headerShown: false
            })} />
        </Stack.Navigator>
    );
}

export default HomeNavigation;
