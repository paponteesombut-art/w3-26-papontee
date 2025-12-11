import { View, Text, Button, StyleSheet} from "react-native";
import { useRouter } from "expo-router";
export default function App (){
    const router = useRouter()
    return (
        <View style={styles.container}>
        <Text style={styles.MainTitle}>หน้าแรก</Text>
        <Button title="ไปหน้าสอง" onPress={() => router.navigate('/square')}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"lightsalmon",
        justifyContent:"center",
        alignItems:"center"
    },
    MainTitle:{
        fontSize:20,
        fontWeight:"700"
    }
})
