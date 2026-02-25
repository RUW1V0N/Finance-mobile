import { View, Text, StyleSheet } from "react-native";

export default function Start(){
    return(
        <View style={style.constainer}>
            <Text style={style.hello}>Hello Wortld</Text>
        </View>
    )
}

const style = StyleSheet.create({
    constainer:{
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    hello:{
        fontSize: 24,
    }
})