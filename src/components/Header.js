import React from 'react'
import { View, StyleSheet } from 'react-native'

import colors from '../config/colors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Header = ({ children, style }) => {
    return (
        <View style={[styles.container, style]}>
            {children}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
        height: hp("16.86"),
        width: wp("100%"),
        borderBottomRightRadius: hp("8.4%"),
        borderBottomLeftRadius: hp("8.4%"),
        elevation: 15,
    }
})

export default Header;
