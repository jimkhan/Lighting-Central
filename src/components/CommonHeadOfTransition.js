import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue } from "react-native-responsive-fontsize";
import colors from '../config/colors'
import TitleText from './AppTitleText'


const CommonHeadOfTransition = ({ style, title, imageLeft, innercontainer, imagestyleLeft, titleTextstyle, onPressShare, imageRight, imagestyleRight }) => {
    return (
        <View style={[styles.container, style]}  >
            <View style={[styles.header, innercontainer]}>
                {imageLeft && <Image source={imageLeft} style={[styles.img, imagestyleLeft]} />}
                <TitleText style={[styles.titletext, titleTextstyle]} >{title} </TitleText>
            </View>
            {imageRight &&
                <TouchableOpacity onPress={onPressShare}  >
                    <Image
                        source={imageRight}
                        style={[styles.imgRight, imagestyleRight]}
                    />
                </TouchableOpacity>
            }

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: hp("1.8%"),
        marginBottom: hp("3%"),
        paddingHorizontal: 10,
        width: wp("80.8%"),
        height: hp("6%"),
        borderRadius: wp("4"),
        borderWidth: 1,
        borderColor: colors.backBitcoinBorder,
        backgroundColor: colors.backBitcoinPayment,
        elevation: 8,

    },
    titletext: {
        fontSize: RFValue(15),
    },
    description: {
        textAlign: 'center',

    },
    header: {
        flexDirection: 'row',
        marginVertical: 8,
    },
    imgRight: {

        width: hp("3.4%"),
        height: hp("3.4%"),
    },
    img: {
        height: hp("3%"),
        width: hp("2.2%"),
        marginHorizontal: 10,
    },
})

export default CommonHeadOfTransition
