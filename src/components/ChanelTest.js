import React from 'react'
import { View, StyleSheet, } from 'react-native'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue } from "react-native-responsive-fontsize";

import colors from '../config/colors'
import ButtonGradient from './ButtonGradient'
import AppText from './AppText'


const ChanelTest = () => {
    return (
        <View style={styles.container} >
            <View style={styles.textGroup} >
                <AppText style={[styles.text, styles.textHead]} >Channel Test</AppText>
                <View style={styles.chanelGroup} >
                    <View style={styles.round} />
                    <AppText style={[styles.text, styles.textBottom]} >Channel is online</AppText>
                </View>

            </View>
            <View style={styles.buttonGroup}>
                {/* <ButtonGradient disabled  name={"Close"} colors={[colors.dangerLight, colors.danger]} style={[styles.buttonOpen,styles.buttonClose]} />  */}
                 {/* You can close it(Close Button) by commenting this line */}
                <ButtonGradient disabled name={"Open"} style={styles.buttonOpen} textStyle={{ fontSize: RFValue(11)}} />
            </View>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        width: wp("78%"),
        margin: hp("1"),
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    round:{
        alignItems: "center",
        width: hp("1.2"),
        height: hp("1.2"),
        borderRadius: hp("1"),
        backgroundColor: colors.primary,
    },
    textGroup:{
        /// Add style here if you need
        
    },
    chanelGroup:{
        flexDirection: "row",
        paddingLeft: wp("1.5%"),
        alignItems: "center",
    },
    buttonGroup:{
        flexDirection: 'row',
    },
    buttonClose:{
        marginRight: wp("2%"),
    },
    buttonOpen:{
        justifyContent: 'flex-start',
        width: wp("15%"),
        height: hp("4%"),

    },
    textHead:{
        fontSize: RFValue(15),
    },
    textBottom:{
        fontSize: RFValue(9),
    },
    text:{
        alignSelf: "flex-start",
    }
})

export default ChanelTest
