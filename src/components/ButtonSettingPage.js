import React from 'react'
import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';

import AppButton from './AppButton'
import colors from '../config/colors'

const ButtonSettingPage = ({ name, onPress }) => {
    return (
        <AppButton
            name={name}
            style={styles.container}
            textStyle={styles.text}
            onPress={onPress}
        />
    )
}
const styles = StyleSheet.create({
    container: {
        height: hp("5.75%"),
        backgroundColor: colors.settingButton,
    },
    text: {
        fontSize: RFValue(13),
    }
})

export default ButtonSettingPage
