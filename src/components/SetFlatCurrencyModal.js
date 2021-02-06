import React, { useState, useEffect } from 'react';
import { View, Modal, StyleSheet, TouchableWithoutFeedback, ScrollView, TouchableOpacity, Image, } from 'react-native';
// import { useNavigation } from '@react-navigation/native'; // Use it if needed

import { RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';

import colors from '../config/colors';
import Text from './AppText';
import TitleWithButton from './TitleWithButton';

const SetFlatCurrencyModal = ({ visiblity, onChangeVisiblity: changeVisiblity, outSidePress, }) => {
    // const navigation = useNavigation(); // Use it if needed
    const [value, setValue] = useState(true);

    const [items, setItems] = useState([
        'Euro',
        'Us Dollar',
        'Real Brasileiro',
        'Japaness Yen',
        'Australian Dollar',
        'Somali Shillin',
        'Chinese Yuan',
        'Mexican peso',
        'Indian Rupe',
        'Chinese Yuan',
        'Mexican peso',
        'Indian Rupe',
    ]);

    const [state, setState] = useState({
        radioBtnsData: items,
        checked: 1,
    });
    return (
        <Modal
            transparent={true}
            animationType="fade"
            visible={value}
            onRequestClose={() => setValue(!visiblity)}>
            <LinearGradient
                colors={[colors.secondaryRGB, colors.primaryRGB]}
                style={styles.linearGradient}>
                <TouchableWithoutFeedback onPress={outSidePress}>
                    <View style={styles.modalOutSide}>
                        <View style={styles.modal}>
                            <TitleWithButton
                                // icon={'keyboard-backspace'}
                                title={'Set Fiat currency'}
                            // onPress={() => navigation.goBack()}
                            />
                            <ScrollView
                                contentContainerStyle={{
                                    flexGrow: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    paddingnBottom: 30,
                                }}>
                                {state.radioBtnsData.map((data, key) => {
                                    return (
                                        <View key={key} style={styles.container}>
                                            {state.checked == key ? (
                                                <TouchableOpacity style={styles.btn}>
                                                    <Text style={styles.text}>{data}</Text>
                                                    <Image
                                                        style={styles.img}
                                                        source={require('../img/rb_selected.png')}
                                                    />
                                                </TouchableOpacity>
                                            ) : (
                                                    <TouchableOpacity
                                                        onPress={() => {

                                                            setState({ radioBtnsData: items, checked: key })
                                                        }
                                                        }
                                                        style={styles.btn}>
                                                        <Text style={styles.text}>{data}</Text>
                                                        <Image
                                                            style={styles.img}
                                                            source={require('../img/rb_unselected.png')}
                                                        />
                                                    </TouchableOpacity>
                                                )}
                                        </View>
                                    );
                                })}
                            </ScrollView>
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
    },
    modal: {
        paddingVertical: hp('4%'),
        height: hp('75%'),
        width: wp('80%'),
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: hp('3.5%'),
        elevation: 5,
    },
    container: {
        width: wp('70%'),
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    img: {
        height: 20,
        width: 20,
    },
    btn: {
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: '#D1D1D1',
        width: wp("60%"),
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: hp("1.8%"),
    },
    text: {
        fontFamily: 'Poppins_Medium',
        fontWeight: '100',
        color: colors.textDark,
        fontSize: RFValue(13),
    },
});

export default SetFlatCurrencyModal;
