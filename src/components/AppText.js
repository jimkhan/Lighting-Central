import React from 'react'
import { Text, StyleSheet, } from 'react-native'

import colors from '../config/colors'
import { RFValue } from "react-native-responsive-fontsize";

const AppText = ({ children, style }) => {
    return (

        <Text style={[styles.textcommon, style]} > {children} </Text>
    )
}
const styles = StyleSheet.create({
    textcommon: {
        fontSize: RFValue(12),
        alignSelf: 'center',
        color: colors.dark,
        fontFamily: 'Poppins_Medium',
    }
})

export default AppText;
