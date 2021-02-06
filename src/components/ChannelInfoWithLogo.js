import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue } from "react-native-responsive-fontsize";

import AppText from './AppText'

const ChannelInfoWithLogo = ({ image, title, amount, textRightStyle, imageStyle }) => {
    return (
        <View style={styles.container} >
            <View style={styles.textGroup} >
                {image && <Image source={image} style={[styles.img, imageStyle]} />}
                {title && <AppText style={styles.text} >{title}</AppText>}
            </View>
            <View style={styles.buttonGroup}>
                {amount && <AppText style={[styles.text, textRightStyle]} >{amount}</AppText>}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({

    img: {
        alignSelf: 'center',
        top: -hp(".1"),
        marginRight: wp("1%"),
        width: hp("1%"),
        height: hp("1%"),
    },
    container: {
        width: wp("78%"),
        margin: hp("1"),
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    textGroup: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    buttonGroup: {
        flexDirection: 'row',
    },
    text: {
        fontSize: RFValue(11),
        alignSelf: "flex-start",
    }
})

export default ChannelInfoWithLogo



