import React from 'react'
import { View, StyleSheet } from 'react-native'

import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

import TitleText from './AppTitleText'

const TitleWithButton = ({ title, style, icon, onPress }) => {
    return (
        <View style={[styles.container, style]}>

            <View style={styles.first} >
                {icon && <Icon name={icon} size={30} onPress={onPress} />}
            </View>
            <View style={styles.second} >
                <TitleText> {title} </TitleText>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        flexDirection: 'row',
    },
    first: {
        alignSelf: 'flex-start',
    },
    second: {
        flex: 1,
        alignSelf: 'center',
    },

})

export default TitleWithButton
