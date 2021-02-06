import React from 'react'
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import colors from '../config/colors'
import CardCommon from '../components/CardCommon'
import Text from '../components/AppText'

const QRCodeInfoWithCopyButton = ({ image, titleText, description, onPress, style }) => {
    return (
        <CardCommon bodyStyle={[styles.qrCommon, styles.qrCodeInfo, style]} >
            <View style={styles.textcontainer}>
                <Text style={[styles.text, titleText]}>{description} </Text>
            </View>
            <TouchableOpacity onPress={onPress}  >
                <Image
                    source={image}
                    style={[styles.imageRight]}
                />
            </TouchableOpacity>

        </CardCommon>
    )
}
const styles = StyleSheet.create({
    qrCommon: {
        width: wp("72%"),
        minHeight: hp("7.87"),
        borderColor: colors.backBitcoinBorder,
        borderWidth: 1,
        backgroundColor: colors.white,

    },
    qrCodeInfo: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 0,
        padding: hp("1%"),
        marginTop: hp("2%"),
    },
    textcontainer: {
        flex: 1,
        alignItems: 'center',
        paddingLeft: 5,
        paddingRight: wp("5%"),
    },
    text: {
        textAlign: 'left',
    },
    imageRight: {
        marginLeft: 5,
        width: hp("2.27%") + wp("2.27"),
        height: hp("2.27%") + wp("2.27"),
    }
})

export default QRCodeInfoWithCopyButton
