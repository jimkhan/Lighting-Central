import React from 'react'
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import colors from '../config/colors'
import Text from './AppText'
import TitleText from './AppTitleText'

const PaymentBody = ({ style, title, description, image, imagestyle, textstyle, titleTextstyle, onPress, imageRight, imagestyleRight }) => {

    return (
        <TouchableOpacity style={[styles.container, style]} onPress={onPress} >
            <View style={styles.header}>
                {image && <Image source={image} style={[styles.img, imagestyle]} />}
                <TitleText style={[titleTextstyle]} >{title} </TitleText>
                {imageRight && <Image source={imageRight} style={[styles.img, imagestyleRight]} />}
            </View>
            { description && <Text style={[styles.description, textstyle]} >{description} </Text>}
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginVertical: 20,
        width: wp("80.53%"),
        minHeight: hp("16.11%"),
        borderRadius: wp("4"),
        backgroundColor: colors.backLightingPayment,
        elevation: 8,

    },
    description: {
        textAlign: 'center',
    },
    header: {
        flexDirection: 'row',
        marginVertical: hp("1.7%"),
    },
    img: {
        height: hp("3%"),
        width: hp("2.3%"),
        marginHorizontal: 10,
    },
})

export default PaymentBody
