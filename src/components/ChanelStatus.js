import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'

import { RFValue } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../config/colors'
import { useNavigation } from '@react-navigation/native';

import Text from './AppText'

const ChanelStatus = () => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("ViewChanelDetails")} >
            <View style={styles.subContainer} >
                <Text style={styles.text} >No off-Chain Funds </Text>

                <View style={styles.chanelOnline} >
                    <Image
                        source={require("../img/active.png")}
                        style={styles.img}
                    />
                    <Text style={styles.textTwo} >Channel is online </Text>
                </View>

            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginVertical: hp("2"),
        width: wp("86.67%"),
        height: hp("7.13"),
        borderRadius: wp("45%"),
        backgroundColor: colors.brightCyan,
    },
    subContainer: {
        paddingHorizontal: wp("10%"),
        paddingVertical: hp(".7%"),
    },
    text: {
        fontSize: RFValue(15),
        color: colors.white,
        alignSelf: 'flex-start',
    },
    textTwo: {
        fontSize: RFValue(11),
    },
    chanelOnline: {
        flexDirection: 'row',
    },
    img: {
        marginHorizontal: wp("1%"),
        bottom: hp(".2%"),
        width: hp("1.5"),
        height: hp("1.5"),
        alignSelf: 'center',
    }
})

export default ChanelStatus
