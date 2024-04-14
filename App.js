import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import Login from './src/user/login';
import Register from './src/user/register';
import UserProfile from './src/user/profile';
import Listing from './src/plp/listing';
import BottomTabNavigator, { TabNaviagtor } from './src/navigation';
import ProductDisplay from './src/pdp';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Login' screenOptions={{ headerBackTitleVisible: true, headerTitle: '' }}>
            <Stack.Group>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Register" component={Register} />
              <Stack.Screen name="UserProfile" component={UserProfile} />
              <Stack.Screen name="Listing" component={Listing} />
              <Stack.Screen name="Product" component={ProductDisplay} />


            </Stack.Group>
            <Stack.Group>
              <Stack.Screen name="BottomTab" component={TabNaviagtor}
                options={{
                  headerShown: false
                }} />
            </Stack.Group>
          </Stack.Navigator>
        </NavigationContainer>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
