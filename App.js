import React, { useEffect, useState } from 'react';
import { Alert, BackHandler } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import AsyncStorage from '@react-native-async-storage/async-storage';
import FingerprintScanner from 'react-native-fingerprint-scanner';

import SplashScreen from './src/screens/SplashScreen';
import SplashBeforeFingerprint from './src/screens/SplashBeforeFingerprint';
import HomeScreen from './src/screens/HomeScreen';
import RestoreWallet from './src/screens/RestoreWallet';
import NewWallet from './src/screens/NewWallet';
import ReceiveFunds from './src/screens/ReceiveFunds';
import ReceiveBitcoinTransition from './src/screens/ReceiveBitcoinTransition';
import ReceiveLightingPayment from './src/screens/ReceiveLightingPayment';
import ReceiveLightingQrCode from './src/screens/ReceiveLightingQrCode';
import SendFunds from './src/screens/SendFunds';
import SendLightingPayment from './src/screens/SendLightingPayment';
import SendLightingAfterQr from './src/screens/SendLightingAfterQr';
import SendLightingLastPage from './src/screens/SendLightingLastPage';
import SendBitcoinTransition from './src/screens/SendBitcoinTransition';
import SendBitcoinAfterQr from './src/screens/SendBitcoinAfterQr';
import SendBitcoinLastPage from './src/screens/SendBitcoinLastPage';
import Settings from './src/screens/Settings';
import SetPin from './src/screens/SetPin';
import PutPin from './src/screens/PutPin';
import SetCurrency from './src/screens/SetCurrency';
import ChooseBitCoinUnit from './src/screens/ChooseBitCoinUnit';
import ViewChanelDetails from './src/screens/ViewChanelDetails';
import MnemonicPhaseModal from './src/screens/MnemonicPhaseModal';
import AboutUs from './src/screens/AboutUs';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const MainStackNavigator = ({ navigation }) => {

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={"SplashScreen"}
    >
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen} />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen} />
      <Stack.Screen
        name="NewWallet"
        component={NewWallet} />
      <Stack.Screen
        name="PutPin"
        component={PutPin} />
      <Stack.Screen
        name="RestoreWallet"
        component={RestoreWallet} />
      <Stack.Screen
        name="SetPin"
        component={SetPin} />
      <Stack.Screen
        name="SplashBeforeFingerprint"
        component={SplashBeforeFingerprint} />
      <Stack.Screen
        name="ReceiveFunds"
        component={ReceiveFunds} />
      <Stack.Screen
        name="SendFunds"
        component={SendFunds} />
      <Stack.Screen
        name="ReceiveBitcoinTransition"
        component={ReceiveBitcoinTransition}
      />
      <Stack.Screen
        name="ReceiveLightingPayment"
        component={ReceiveLightingPayment}
      />
      <Stack.Screen
        name="ReceiveLightingQrCode"
        component={ReceiveLightingQrCode}
      />
      <Stack.Screen
        name="SendLightingPayment"
        component={SendLightingPayment}
      />
      <Stack.Screen
        name="SendLightingAfterQr"
        component={SendLightingAfterQr}
      />
      <Stack.Screen
        name="SendLightingLastPage"
        component={SendLightingLastPage}
      />
      <Stack.Screen
        name="SendBitcoinTransition"
        component={SendBitcoinTransition}
      />
      <Stack.Screen
        name="SendBitcoinAfterQr"
        component={SendBitcoinAfterQr}
      />
      <Stack.Screen
        name="SendBitcoinLastPage"
        component={SendBitcoinLastPage}
      />
      <Stack.Screen
        name="SetCurrency"
        component={SetCurrency} />
      <Stack.Screen
        name="ChooseBitCoinUnit"
        component={ChooseBitCoinUnit} />
      <Stack.Screen
        name="ViewChanelDetails"
        component={ViewChanelDetails} />
      <Stack.Screen
        name="Settings"
        component={Settings} />
      <Stack.Screen
        name="MnemonicPhaseModal"
        component={MnemonicPhaseModal} />
    </Stack.Navigator>
  )

}

const App = () => {

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name={"Home"} component={MainStackNavigator} />
        <Drawer.Screen name={"Chanel Status"} component={ViewChanelDetails} />
        <Drawer.Screen name={"About Us"} component={AboutUs} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
