import React from 'react'
import { Image, StyleSheet } from 'react-native'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Header from './Header'

const HeaderHome = () => {
    return (
        <Header>
            <Image
                source={require("../img/MainLogoWithText2.png")}
                style={styles.img}
            />
        </Header>
    )
}
const styles = StyleSheet.create({
    img: {
        height: hp("8.7%"),
        width: hp("25%"),
    }
})

export default HeaderHome
