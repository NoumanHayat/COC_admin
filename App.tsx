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
import Report from './code/screen/Report/report';
import Display from './code/screen/Report/display';
import Review from './code/screen/Review/review';
import DisplayReview from './code/screen/Review/displayReview';
const Stack = createNativeStackNavigator();
const AppStarting = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Review">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Report" component={Report} />
        <Stack.Screen name="Display" component={Display} />
        <Stack.Screen name="Review" component={Review} />
        <Stack.Screen name="DisplayReview" component={DisplayReview} />
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
