import React from "react";
import { StyleSheet, Text, View } from "react-native";
import estilo from "./estilo";

export default props =>{
    const delta = props.max - props.min + 1
    const aleatorio = parseInt(Math.random() * delta + props.min)

    return(
        <View>
            <Text style={style.txtG}>Número Aleatório {aleatorio}</Text>
        </View>
    )
}

const style = StyleSheet.create(
    {
        txtG:{
            fontSize: 30,
            textAlign: 'center',
            color: '#a067ff'
        }
    }
)