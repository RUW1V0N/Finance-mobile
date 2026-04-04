import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F7F9FC"
    },
    container: {
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fefefe",
        gap: 20,
        paddingHorizontal: 15
    },   
    imageContainer:{
        width: "100%",
        aspectRatio: 1,
        justifyContent:"center",
        alignItems:"center",
        overflow: "hidden"
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },
    textContainer:{
        alignItems: "center",
        gap: 24
    },
    title: {
        color: "#3e7bfe",
        textAlign: "center",
        fontSize: 35,
        fontWeight: "800",
        lineHeight:40,
    },
    subTitle: {
        maxWidth: "85%",
        fontSize: 20,
        color: "#6B7280",
        textAlign: "center",
        lineHeight: 22
    },
    buttonContainer: {
        width: "90%",
        justifyContent: "center",
        alignItems: "center",
        gap: 12
    },
    button: {
        width: "100%", 
        alignItems: "center",
        backgroundColor: "#3E7BFE",
        padding: 16,
        borderRadius: 30,
        
        shadowColor: "#3E7BFE",
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 5,
    },
    secondaryButtonStyle: {
        backgroundColor: "#b8cefc",
    },
    primaryText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
    secondaryTextStyle: {
        color: "#3E7BFE",
    }
})