import React, { useState } from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue } from "react-native-responsive-fontsize";
import colors from '../config/colors'



const CurrencyCommon = ({ onPress, onPressTwo, onChangeValue: onChangeValue }) => {
    
    const [items, setItems] = useState(['Euro', 'Us Dollar', 'Real Brasileiro', 'Japaness Yen', 'Australian Dollar', 'Somali Shillin', 'Chinese Yuan', 'Mexican peso', 'Indian Rupe',])

    const [state, setState] = useState({
        radioBtnsData: items,
        checked: 1
    })

    return (
        state.radioBtnsData.map((data, key) => {
            return (
                <View key={key} style={styles.container} >
                    {state.checked == key ?
                        <TouchableOpacity style={styles.btn} onPress={onPress} >
                            <Text style={styles.text} >{data}</Text>
                            <Image style={styles.img} source={require("../img/rb_selected.png")} />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onChangeValue={onChangeValue} onPress={() => setState({ radioBtnsData: items, checked: key })} style={styles.btn}>
                            <Text style={styles.text} >{data}</Text>
                            <Image style={styles.img} source={require("../img/rb_unselected.png")} />
                        </TouchableOpacity>
                    }
                </View>
            )
        })

    );
}
const styles = StyleSheet.create({

    container: {
        width: wp("60%"),
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderColor: "#D1D1D1",
    },
    img: {
        height: 20,
        width: 20
    },
    btn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        fontFamily: 'Poppins_Medium',
        fontWeight: '100',
        color: colors.textDark,
        fontSize: RFValue(13)
    }
});

export default CurrencyCommon
