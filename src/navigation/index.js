import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import HomeNavigation from './homeNavigation';
import Explore from '../screens/Explore';
import UserAccount from '../screens/UserAccount';

const Tab = createBottomTabNavigator();

export const TabNaviagtor = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: false
        }}>
            <Tab.Screen
                name="Landing"
                component={HomeNavigation}
                options={({ navigation }) => ({
                    headerTitle: 'Home',
                    tabBarStyle: styles.tabBarCustomStyle,
                })}
            />
            <Tab.Screen
                name="Sourcing"
                component={Explore}
                options={({ navigation }) => ({
                    headerTitle: 'Explore',
                    tabBarStyle: styles.tabBarCustomStyle,
                })}
            />
            <Tab.Screen
                name="Account"
                component={UserAccount}
                options={({ navigation }) => ({
                    headerTitle: 'Account',
                    tabBarStyle: styles.tabBarCustomStyle,
                })}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    headerTitleStyle: { color: '#2c3e50' },
    tabBarCustomStyle: {
        height: 60,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0
    },
})