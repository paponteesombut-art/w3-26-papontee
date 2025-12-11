import { View, Text, Button, StyleSheet,TextInput} from "react-native";
import { useState } from "react";
export default function Square  (){
const [width,SetWidth] = useState(0)
const [lengh,setLengh] = useState(0)
const [area,setArea] = useState(0)

    return (
        <View style={styles.container}>
        <Text style={styles.MainTitle}>คำนวนพื้นที่สี่เหลี่ยม</Text>
        <Button title="ไปหน้าแรก"></Button>
        <TextInput style={styles.TextInput} placeholder="กรอกความกว่าง" value={width.toString()} onChangeText={(w)=> SetWidth(Number(w))}/>
        <TextInput style={styles.TextInput} placeholder="กรอกความยาว"/>
        <Button title="คำนวณ"></Button>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"lightsalmon",
        justifyContent:"center",
        alignItems:"center",
        gap: 20
    },
    MainTitle:{
        fontSize:20,
        fontWeight:"700"
    }
    ,
    TextInput:{
        borderWidth: 1,
        width: "80%",



        borderColor: "skyblue"
    }
})
