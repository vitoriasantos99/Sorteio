import React from "react";
import { StyleSheet, Text, View } from "react-native";
import estilo from "./estilo";

export default props => {
    console.warn(props)
    return(
        <View style={estilo.fundo}>
            <Text style={style.textG}> O número {props.maior} é maior que o número {props.menor}</Text>
        </View>
    )
}

const style = StyleSheet.create(
    {
        textG:{
            fontSize: 30,
            color: '#B0E0E6',
            textAlign: 'center',
        }
    }
)