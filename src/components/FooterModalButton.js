import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, Image, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import ModalView from './ModalView'

const FooterModalButton = ({ style }) => {
    const navigation = useNavigation();
    const [value, setValue] = useState(false)

    return (

        <TouchableOpacity style={[styles.container, style]} onPress={() => { setValue(true) }}>
            <ModalView
                visiblity={value}
                outSidePress={() => { setValue(!value) }}
                onPressChanel={() => { setValue(false), navigation.navigate('ViewChanelDetails') }}
                onPressReceive={() => { setValue(false), navigation.navigate('ReceiveFunds') }}
                onPressSend={() => { setValue(false), navigation.navigate('SendFunds') }}
            />

            <Image
                source={require("../img/FooterLogo.png")}
                style={styles.imageStyle}
            />

        </TouchableOpacity>

    )
}
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        alignSelf: 'flex-end',
        top: hp("58%"),
        right: hp("3%"),
        zIndex: 100,

    },
    imageStyle: {
        width: hp("7.38%"),
        height: hp("7.1%"),

    },
})

export default FooterModalButton
