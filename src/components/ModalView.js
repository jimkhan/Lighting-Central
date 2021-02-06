import React, { useState, useEffect } from 'react';
import { View, Modal, StyleSheet, TouchableWithoutFeedback } from 'react-native';
// import { useNavigation } from '@react-navigation/native'; // Use it if you need

import { RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';


import colors from '../config/colors';
import Button from './AppButton';
import ButtonGradient from './ButtonGradient';

const ModalView = ({ visiblity, onChangeVisiblity: changeVisiblity, outSidePress, onPressChanel, onPressReceive, onPressSend }) => {
    // const navigation = useNavigation(); // Use it if you want to navigate
    const [value, setValue] = useState(false)
    return (
        <Modal transparent={true} animationType="fade" visible={visiblity} onRequestClose={() => setValue(!visiblity)}>
            {/* <LinearGradient
                colors={[colors.secondaryRGB, colors.primaryRGB]}
                style={styles.linearGradient}
            > */}
            <TouchableWithoutFeedback
                style={styles.linearGradient}
                onPress={outSidePress}>
                <View style={styles.modalOutSide}>
                    <View style={styles.modal}>
                        <View style={styles.ButtonGroup}>
                            <Button
                                name={'Send'}
                                style={styles.button}
                                onPress={onPressSend}
                            />
                            <ButtonGradient
                                name={'Receive'}
                                style={styles.button}
                                onPress={onPressReceive}
                            />
                            <Button
                                name={'Chanels'}
                                style={styles.button}
                                onPress={onPressChanel}
                            />
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
            {/* </LinearGradient> */}
        </Modal>
    );
};

const styles = StyleSheet.create({
    button: {
        width: hp('16%'),
        marginHorizontal: 10,
    },

    ButtonGroup: {
        flex: 1,
        justifyContent: 'center',
    },
    linearGradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalOutSide: {
        flex: 1,
        flexDirection: 'column-reverse',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    modal: {
        position: 'absolute',
        minHeight: hp('30%'),
        width: hp('20%'),
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
        elevation: 10,
        bottom: hp('10%'),
        right: hp('3%'),
    },
});

export default ModalView;
