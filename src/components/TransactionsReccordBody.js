import React, {useState} from 'react'
import { TouchableOpacity, StyleSheet, Image, View } from 'react-native'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue } from "react-native-responsive-fontsize";

import colors from '../config/colors'
import TitleText from './AppTitleText'
import TransitionBodyModal from './TransitionBodyModal'
import Text from './AppText'


// onPress = {() => setVisibility(true)}
// visible = { visibility }
// outSidePress = {() => setVisibility(!visibility)}

const TransactionsReccordBody = ({ bodyStyle, amount, times, modalTitle, modalDescription }) => {
    const [value, setValue] = useState(false)
    const [visibility, setVisibility] = useState(false)
    return (
        <TouchableOpacity style={[styles.container, bodyStyle]} onPress={()=> setVisibility(true)} >
            <TransitionBodyModal visibility={visibility} outSidePress={()=> setVisibility(!visibility)} title={modalTitle} description={modalDescription}  />
            <View style={styles.left} >
                <Image source={require("../img/FlashLogo.png")} style={[styles.img, styles.extraFlash]} />
                <TitleText style={styles.title} > {amount} </TitleText>
            </View>
            <View style={styles.right} >
                <Text style={styles.time}> {times} ago </Text>
                <Image source={require("../img/TimeLogo.png")} style={[styles.img]} />
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 10,
        paddingHorizontal: wp("4%"),
        width: wp("93.6%"),
        height: hp("5.66%"),
        borderRadius: hp("4%"),
        backgroundColor: colors.TransactionsBody,
        elevation: 5,
    },
    left: {
        flexDirection: "row",
    },
    right: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'flex-end',

    },
    img: {
        alignSelf: 'center',
        height: hp("2.3%"),
        width: hp("2.54%"),
    },
    extraFlash: {
        height: hp("2.9%"),
        width: hp("1.6%"),
    },
    time: {
        fontSize: RFValue(11),
        color: colors.white,
    },
    title: {
        fontSize: RFValue(15),
        color: colors.white,
    },
})

export default TransactionsReccordBody
