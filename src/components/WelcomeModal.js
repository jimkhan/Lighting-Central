import React, { useState } from 'react'
import { View, Modal, StyleSheet } from 'react-native'

import { RFValue } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import Clipboard from '@react-native-community/clipboard';


import colors from '../config/colors'
import Text from './AppText'
import Button from './AppButton'
import ButtonGradient from './ButtonGradient'

const WelcomeModal = ({ visiblity, onChangeVisiblity: changeVisiblity, onPress }) => {

    const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
    const [value, setValue] = useState("")
    const [copiedText, setCopiedText] = useState('');
    const copyToClipboard = () => {
        Clipboard.setString(text);
        const copied = Clipboard.getString();
        setCopiedText(copied)
        alert("Copied")
    };

    return (
        <Modal transparent={true} visible={visiblity}  >

            <View style={styles.modalOutSide} >
                <View style={styles.modal} >
                    <Icon
                        name={"ios-chevron-down-circle-outline"}
                        size={hp("3%")}
                        color={colors.brightCyan}
                        onPress={onPress}
                    />
                    <View style={styles.textContainer} >
                        <Text style={styles.textHeading} >View mnemonic phase </Text>
                        <Text style={styles.longText}>{text} </Text>
                    </View>
                    <View style={styles.ButtonGroup} >
                        <Button name={"Copy Text"} style={styles.button} onPress={copyToClipboard} />
                        <ButtonGradient name={"Ok"} style={styles.button} onPress={onPress} />
                    </View>
                </View>
            </View>

        </Modal>
    )
}

const styles = StyleSheet.create({

    button: {
        width: wp("30%"),
        marginHorizontal: 10,
    },
    ButtonGroup: {
        flex: 1,
        flexDirection: 'row',
    },
    linearGradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    longText: {
        textAlign: 'center',
        color: colors.dark,
        fontSize: RFValue(10),
        margin: 10,
    },
    textContainer: {
        width: wp("75%"),
        margin: 10,
    },
    textHeading: {
        color: colors.dark,
    },
    modalOutSide: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: colors.backRGB,
    },
    modal: {
        height: hp('46.37%'),
        width: wp("110%"),
        paddingTop: hp("3"),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
        borderTopRightRadius: wp("55"),
        borderTopLeftRadius: wp("55"),
        elevation: 15,
    }
});

export default WelcomeModal;
