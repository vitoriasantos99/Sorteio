import React from "react";
import { StyleSheet, Text, View } from "react-native";
import estilo from "./estilo";

export default () =>{
    return(
        <View>
            <Text style={titulo.txtG}>Sorteio Aleatório</Text>
        </View>
    )
}

const titulo = StyleSheet.create(
    {
        txtG:{
            margin: 50,
            fontSize: 30,
            textAlign: 'center',
            color: '#c70a7e',
        }
    }
)