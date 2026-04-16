import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    screen: {
        flex: 1, 
        backgroundColor: "#fefefe"
    },
    imageContainer: {
        flex: 0.5,
        width: "100%",
        justifyContent:"center",
        alignItems:"center",
        overflow: "hidden"
    },
    image:{
        width: "100%",
        height: "100%",
        resizeMode:"contain"
    },
    container: {
        flex:1,
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#fefefe",
        gap: 20,
        paddingHorizontal: 15,
        paddingVertical: 10
    }, 
    loginContainer: {
        width: "100%",
        alignItems: "center",
        gap: 20
    },
    title: {
        color: "#3e7bfe",
        textAlign: "center",
        fontSize: 35,
        fontWeight: "800",
        lineHeight:40,
    },
    inputContainer:{
        width: "100%",
    },
    inputLabel:{
        position: "absolute",
        top: -8,
        left: 10,
        backgroundColor: "#fff",
        paddingHorizontal: 4,
        fontSize: 14,
        color: "#6B7280",
        zIndex: 1
    },
    input:{
        padding: 10,
        fontSize: 18,
        borderWidth: 2,
        borderColor: "#c9c9c9",
        borderRadius: 12
    },
    inputError:{
        borderColor:"#ff1c42",
    },
    errorLabel:{
        width: "100%",
        alignItems: "center",
        padding: 15,
        marginVertical: 5,
        color: "#d52b48",
        backgroundColor: "#fee9ed"
    },
    loginButton: {
        padding: 15
    },
    line:{
        width: "100%",
        height: 2,
        backgroundColor: "#c2c2c2",
        justifyContent: "center",
        alignItems: "center"
    },
    lineText:{
        position: "absolute",
        alignItems:"center",
        color: "#878787",
        backgroundColor: "#fefefe",
        paddingHorizontal: 5
    },
    additionalLoginContainer:{
        width:"60%",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
})
