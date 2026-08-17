import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#fefefe",
    },
    imageContainer: {
        flex: 1.1,
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
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#fefefe",
        gap: 20,
        paddingHorizontal: 15,
        paddingVertical: 10
    }, 
    loginContainer: {
        width: "100%",
        alignItems: "center",
        gap: 16,
    },
    title: {
        color: "#3e7bfe",
        textAlign: "center",
        fontSize: 32,
        fontWeight: "800",
        lineHeight: 40,
    },
    wrapper: {
        width: "100%",
        gap: 8,
    },
    inputContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        padding: 14,
        gap: 10,

        borderWidth: 2,
        borderColor: "#E5E7EB",
        borderRadius: 16,
        minHeight: 56,
    },
    inputLabel: {
        position: "absolute",
        top: -10,
        left: 12,
        backgroundColor: "#fff",
        paddingHorizontal: 6,
        fontSize: 14,
        color: "#6B7280",
        zIndex: 1,
    },
    input: {
        flex: 1,
        fontSize: 16,
        minWidth: 0,
        color: "#374151",
    },
    inputError: {
        borderColor: "#ff1c42",
    },
    errorLabel: {
        width: "100%",
        padding: 12,
        marginVertical: 4,
        color: "#d52b48",
        backgroundColor: "#fee9ed",
        borderRadius: 12,
    },
    visibility: {
        width: 22,
    },
    forgotButton: {
        alignSelf: "flex-end",
        marginBottom: 8,
    },
    textForgotButton: {
        color: "#3E7BFE",
        backgroundColor: "#fefefe",
        paddingHorizontal: 5,
    },
    loginButton: {
        width: "100%",
    },
    gradienButton: {
        width: "100%",
        alignItems: "center",
        backgroundColor: "#3E7BFE",
        paddingVertical: 16,
        borderRadius: 30,

        shadowColor: "#3B82F6",
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 5 },
        elevation: 5,
    },
    textButton: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
    line: {
        width: "100%",
        height: 2,
        backgroundColor: "#c2c2c2",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 4,
    },
    lineText: {
        position: "absolute",
        color: "#878787",
        backgroundColor: "#fefefe",
        paddingHorizontal: 6,
    },
    additionalContainer: {
        width: "100%",
        maxWidth: 280,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    additionalButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: "#f0f0f0",
        justifyContent: "center",
        alignItems: "center",
    },
    footerContainer: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: 4,
        paddingBottom: 8,
    },
    footerText: {
        color: "#6B7280",
        fontSize: 16,
    },
    footerButton:{
        marginLeft: 5
    },
    textButtonFooter: {
        color: "#3E7BFE",
        fontSize: 16,
        fontWeight: "600",
    },
});
