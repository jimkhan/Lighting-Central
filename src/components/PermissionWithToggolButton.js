import React, { useState } from 'react'
import { View, Switch, StyleSheet } from 'react-native'

import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';

import colors from '../config/colors';
import Text from './AppText'

const PermissionWithToggolButton = ({ titleStyle, switchValue, switchOnValueChange, subTitleStyle, subTitle, title }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={styles.container} >
            <View style={styles.textArea}>
                {title && <Text style={[styles.title, titleStyle]} >{title} </Text>}
                {subTitle && <Text style={[styles.subTitle, subTitleStyle]} >{subTitle} </Text>}

            </View>
            <Switch
                trackColor={{ false: "#D9D9D9", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#AFAFAF"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={switchOnValueChange}
                value={switchValue}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: hp("2%"),
        padding: hp("2%"),
        flexDirection: 'row',
        width: wp("82.2%"),
        height: hp("7%"),
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: hp("6%"),
        borderWidth: 2,
        borderColor: colors.settings,
    },
    title: {
        fontSize: RFValue(11),
        alignSelf: 'flex-start',

    },
    subTitle: {
        alignSelf: 'flex-start',
        color: colors.lightGray,
        fontSize: RFValue(9),
    },
    textArea: {
        alignItems: 'flex-start',
    }
})

export default PermissionWithToggolButton
