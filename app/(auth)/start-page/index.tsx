import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import logo from "@/assets/logo/logo.png"

export default function Start() {
    return (
        <View style={style.wrapper}>
            <View style={style.container}>
                <Image source={logo} style={style.logo} />
                <Text style={style.nameLogo}>ZentScope</Text> 
                <Pressable style={style.buttonAuth}>
                    <Text style={style.textButtonAuth}>Login In</Text>
                </Pressable>
                <Pressable style={style.buttonAuth}>
                    <Text style={style.textButtonAuth}>Sign Up</Text>
                </Pressable>
                <Pressable>
                    <Text style={style.textButtonForgot}>Forgot Password?</Text>
                </Pressable>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    wrapper:{
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fefefe"
    },
    container:{
        width: "80%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 14,
        backgroundColor: "#fefefe"
    },
    logo: {
        width: "100%",
        height: 200,
        resizeMode: "contain"
    },
    nameLogo:{
        textAlign: "center",
        color: "#007edf",
        fontWeight: "bold",
        fontSize: 30
    },
    buttonAuth:{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#9dbefd",
        padding: 12,
        borderRadius: 30  
    },
    textButtonAuth:{
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
    },
    textButtonForgot:{
        textAlign: "center",
        fontSize: 15,
        fontWeight: "bold",
    }
})