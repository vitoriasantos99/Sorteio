import React from "react";
import { StyleSheet, Text, View } from "react-native";
import estilo from "./components/estilo";
import MinMax from "./components/MinMax";
import Aleatorio from "./components/Aleatorio";
import Titulo from "./components/Titulo";

export default () =>{
    return(
        <View style={estilo.fundo}>
            <Titulo/>
            <Aleatorio min={1} max={60}/>
            <Aleatorio min={1} max={60}/>
            <Aleatorio min={1} max={60}/>
            <Aleatorio min={1} max={60}/>
            <Aleatorio min={1} max={60}/>
            <Aleatorio min={1} max={60}/>
        </View>
    )
}

const style = StyleSheet.create(
    {
        txtG:{
            fontSize: 40,
            textAlign: 'center',
            margin: 50,
        }
    }
)