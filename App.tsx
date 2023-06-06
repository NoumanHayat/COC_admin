/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StatusBar,
} from 'react-native';
import { COLORS } from './code/constants';
// import AfterLoadSplashScreen from './screens/AfterLoadSplashScreen/AfterLoadSplashScreen';
import { DataProvider } from './code/hooks';
// import Notification from './screens/Dashbord/notification';
// import mainDisplay from './screens/Dashbord/mainDisplay';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './code/screen/home';
import text from './code/screen/text';
const Stack = createNativeStackNavigator();
const AppStarting = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="text">
        <Stack.Screen name="text" component={text} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default function App() {
  return (
    <DataProvider>
      <AppStarting />
    </DataProvider>
  );
}
