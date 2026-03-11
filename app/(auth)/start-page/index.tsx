import { View, Text, Button, Image, StyleSheet } from "react-native";
import logo from "@/assets/logo/logo.png"

export default function Start(){
    return(
        <View style={style.constainer}>
            <Image source={logo} style={style.logo}/>
            <Button style={style.buttonStart} title="Login"/>
            <Button style={style.buttonStart} title="Registration"/>
        </View>
    )
}

const style = StyleSheet.create({
    constainer:{
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    },
    buttonStart:{
        width: "60%",
        height: 50,
    },
    logo: {
        width: "85%",
        height: "40%",
    }
})