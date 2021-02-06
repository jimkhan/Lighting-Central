import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

import { RFValue } from "react-native-responsive-fontsize";

import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';

import AppTitleText from './AppTitleText'
import colors from '../config/colors'

const SuccessTransition = ({ title, image, textStyle }) => {
    return (
        <View style={styles.container} >

            <Image 
            source={image}
            style={styles.img} 
            />
            <AppTitleText style={[styles.text, textStyle]} >{title}</AppTitleText>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        top: hp("15"),
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        color: colors.lightingTitle,
    },
    img:{
        
        marginBottom: hp("4%"),
        width: hp("10%"),
        height: hp("10%"),
    }
})

export default SuccessTransition
