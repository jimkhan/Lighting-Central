import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';

import Header from './Header';

const HeaderCommon = () => {
  const navigation = useNavigation();
  return (
    <Header style={styles.container}>

      <TouchableOpacity onPress={() => navigation.openDrawer()} >
        <Image source={require('../img/Menu.png')}
         style={styles.menuLogo}
           />
      </TouchableOpacity>

      <Image source={require('../img/MainLogo.png')} style={styles.logoMain} />

      <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
        <Image
          source={require('../img/Settings.png')}
          style={styles.settingLogo}
        />
      </TouchableOpacity>
    </Header>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
  },
  settingLogo: {
    height: hp('2.8%'),
    width: hp('2.8%'),
  },
  menuLogo: {
    height: hp('2.4%'),
    width: hp('2.5%'),
  },
  logoMain: {
    height: hp('8.0%'),
    width: hp('6.35%'),
  },
});

export default HeaderCommon;
