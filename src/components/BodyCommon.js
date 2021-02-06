import React from 'react'
import { View, StyleSheet } from 'react-native'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../config/colors'

const BodyCommon = ({ children, style }) => {
    return (
        <View style={[styles.container, style]}>
            <View>
                {children}
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 9,
        backgroundColor: colors.white,
        paddingTop: 10,
        paddingBottom: 40,
        width: wp("100%"),
        borderTopRightRadius: hp("4%"),
        borderTopLeftRadius: hp("4%"),
        elevation: 15,
    }
})

export default BodyCommon
