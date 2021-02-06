import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue } from "react-native-responsive-fontsize";
import LinearGradient from 'react-native-linear-gradient';

import colors from '../config/colors'

const Button = ({ name, style, disabled, textStyle, onPress, ...otherProps }) => {
    return (
        <TouchableOpacity disabled={disabled} style={[styles.button, style]} onPress={onPress}>
            <LinearGradient
                colors={[colors.secondary, colors.primary]}
                style={styles.linearGradient}
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} {...otherProps} >
                <Text style={[styles.buttontxt, textStyle]}> {name} </Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    linearGradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: hp("4%"),
    },
    button: {
        width: wp('80%'),
        height: hp('7.13%'),
        borderRadius: hp("4%"),
        marginTop: 10,
    },
    buttontxt: {
        color: "#fff",
        fontSize: RFValue(15),
        fontFamily: 'Poppins_Medium',
    }
})
export default Button;
