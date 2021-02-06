import React, { useState, useEffect } from 'react';
import { View, Modal, StyleSheet, TouchableWithoutFeedback, ScrollView, TouchableOpacity, Image, } from 'react-native';
// import { useNavigation } from '@react-navigation/native'; // Use it if needed

import { RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';

import colors from '../config/colors';
import AppTitleText from './AppTitleText'
import AppText from './AppText'


const TransitionBodyModal = ({ visibility, outSidePress,title, description }) => {

    return (
        <Modal
            transparent={true}
            animationType="fade"
            visible={visibility}
            >
            <LinearGradient
                colors={[colors.secondaryRGB, colors.primaryRGB]}
                style={styles.linearGradient}>
                <TouchableWithoutFeedback  onPress={outSidePress}>
                    <View style={styles.modalOutSide}>
                        <View style={styles.modal}>
                            <AppTitleText>{title}</AppTitleText>
                            <AppText>{description}</AppText>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </LinearGradient>
        </Modal>
    );
};

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalOutSide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        paddingVertical: hp('4%'),
        paddingHorizontal: hp("3%"),
        height: hp('30%'),
        width: wp('80%'),
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: hp('3.5%'),
        elevation: 5,
    },

});

export default TransitionBodyModal;
