import React from 'react';
import { View, StyleSheet, } from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';

import Button from './AppButton';
import ButtonGradient from './ButtonGradient';
import ModalView from './ModalView';

const BottomPopUpModal = () => {
    return (
        <ModalView>

            <View style={styles.ButtonGroup}>
                <Button
                    name={'Send'}
                    style={styles.button}
                    onPress={() => navigation.navigate('SendFunds')}
                />
                <ButtonGradient
                    name={'Receive'}
                    style={styles.button}
                    onPress={() => navigation.navigate('ReceiveFunds')}
                />
                <Button
                    name={'Home'}
                    style={styles.button}
                    onPress={() => { navigation.navigate('ViewChanelDetails') }}
                />
            </View>
        </ModalView>
    )
}

const styles = StyleSheet.create({
    button: {
        width: wp('30%'),
        marginHorizontal: 10,
    },

    ButtonGroup: {
        flex: 1,
        justifyContent: 'center',
    },
});

export default BottomPopUpModal
