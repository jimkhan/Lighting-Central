import React from 'react'
import { View, StyleSheet } from 'react-native'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as Progress from 'react-native-progress';

import colors from '../config/colors'
import CardCommon from './CardCommon'
import ChanelTest from './ChanelTest'
import ChannelInfoWithLogo from './ChannelInfoWithLogo'

const ChanelStatusDetails = ({ progress, capacity, totalPayment, valueInFlight, canSend, canReceive, startDate }) => {
    return (
        <CardCommon bodyStyle={styles.body}>

            <ChanelTest />
            <Progress.Bar
                progress={progress} // Use 0.1- 1 or number/100
                width={wp("77%")} // You Can use "color" property for changing color
                height={hp("2%")}
                color={colors.primary}
                borderRadius={hp("2%")}
                marginVertical={hp("2%")}
                backgroundColor={colors.secondary}
            />
            <ChannelInfoWithLogo
                image={require("../img/Card.png")}
                title={"Capacity"}
                textRightStyle={styles.textCapacity}
                imageStyle={styles.cardImage}
                amount={capacity}
            />
            <ChannelInfoWithLogo
                image={require("../img/Send.png")}
                title={"Can send"}
                textRightStyle={styles.textSend}
                imageStyle={styles.sendImage}
                amount={canSend}
            />
            <ChannelInfoWithLogo
                image={require("../img/Receive.png")}
                title={"Can receive"}
                textRightStyle={styles.textReceive}
                imageStyle={styles.receiveImage}
                amount={canReceive}
            />
            <View style={styles.line} />
            <ChannelInfoWithLogo
                image={require("../img/Rocket.png")}
                imageStyle={styles.rocketImage}
                title={"Started"}
                amount={startDate}
            />
            <ChannelInfoWithLogo
                image={require("../img/Tv.png")}
                title={"Value in-flight"}
                imageStyle={styles.tvImage}
                amount={valueInFlight}
            />
            <ChannelInfoWithLogo
                image={require("../img/Calculator.png")}
                imageStyle={styles.calculatoImage}
                title={"Total payment"}
                amount={totalPayment}
            />

        </CardCommon>

    )
}
const styles = StyleSheet.create({

    line: {
        marginVertical: hp("2%"),
        width: wp("78"),
        height: hp(".2"),
        backgroundColor: colors.backLightingBorder,
    },
    cardImage: {
        width: hp("1.15%"),
        height: hp(".89"),

    },
    sendImage: {
        height: hp("1.13"),
        width: hp(".99"),
    },
    receiveImage: {
        height: hp("1.3"),
    },
    rocketImage: {
        height: hp("1.2"),
        width: hp("1.2"),
    },
    tvImage: {
        width: hp("1.2%"),
        height: hp("1.1%"),
    },
    calculatoImage: {
        width: hp("1.1"),
        height: hp("1.1"),
    },
    textSend: {

        color: colors.primary,
    },
    textReceive: {

        color: colors.bitcoinTitle,
    },
    textCapacity: {
        color: colors.secondary,
    },
    body: {
        flex: 0,
        alignItems: 'center',
        width: wp("87%"),
        // height: hp("30%"),
        borderColor: colors.backLightingBorder,
        borderWidth: 1,
        backgroundColor: colors.white,
        marginTop: hp(".5%"),
        marginBottom: hp("1%"),
        borderRadius: hp("2%"),
        paddingBottom: hp("2%"),

    },


})

export default ChanelStatusDetails
