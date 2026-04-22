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
        justifyContent:"space-between",
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
    wrapper:{
        width: "100%",
        gap: 6
    },
    inputContainer:{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        gap: 5,

        borderWidth: 2,
        borderColor: "#E5E7EB",
        borderRadius: 12
    },
    inputLabel:{
        position: "absolute",
        top: -10,
        left: 8,
        backgroundColor: "#fff",
        paddingHorizontal: 4,
        fontSize: 14,
        color: "#6B7280",
        zIndex: 1
    },
    input:{
        flex: 1,
        fontSize: 18,
        minWidth: 0,
        color: "#374151",
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
    visibility:{
        width: 22
    },
    forgotButton:{
        alignSelf: "flex-end",
        marginBottom: 20
    },
    textForgotButton: {
        alignItems:"center",
        color: "#3E7BFE",
        backgroundColor: "#fefefe",
        paddingHorizontal: 5
    },
    loginButton: {
        width: "100%", 
    },
    gradienButton:{
        width: "100%",
        alignItems: "center",
        backgroundColor: "#3E7BFE",
        padding: 16,
        borderRadius: 30,

        shadowColor: "#3B82F6",
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 5 },
        elevation: 5,
    },
    textButton:{
        alignItems:"center",
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
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
    footerContainer:{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
})
