import React from 'react'
import { View, StyleSheet } from 'react-native'

import colors from '../config/colors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const CardCommon = ({ children, bodyStyle }) => {
    return (
        <View style={[styles.container, bodyStyle]} >

            {children}

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'center',
        width: wp("80.8%"),
        borderRadius: wp("6%"),
        backgroundColor: colors.primary,
    },
})

export default CardCommon
