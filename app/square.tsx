import { View, Text, Button, StyleSheet,TextInput} from "react-native";
import { useState } from "react";
import { router, useRouter } from "expo-router";
export default function Square  (){
const [width,SetWidth] = useState(0)
const [lenght,setLenght] = useState(0)
const [area,setArea] = useState(0)

function calSquare(){
    let result = width * lenght
    setArea(result)
}
    return (
        <View style={styles.container}>
        <Text style={styles.MainTitle}>คำนวนพื้นที่สี่เหลี่ยม</Text>
        
        <Text> กว้าง {width} ซม. ยาว {lenght}ซม. พื้นที่คือ{area} ตร.ซม </Text>
        <TextInput style={styles.TextInput} placeholder="กรอกความกว่าง" value={width.toString()} onChangeText={(w)=> SetWidth(Number(w))}/>
        <TextInput value={lenght.toString()} onChangeText={(l) => setLenght(Number(l))} style={styles.TextInput} placeholder="กรอกความยาว" />
        <Button title="คำนวณ" onPress={() => calSquare()}></Button>
        <Button title="ไปหน้าสาม" onPress={() => router.navigate('/circle')}></Button>
        <Button title="ไปหน้าแรก" onPress={() => router.navigate('/')}></Button>
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
