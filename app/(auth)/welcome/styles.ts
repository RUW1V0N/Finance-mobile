import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        width: "100%",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#FBFBFD",
        gap: 20,
        paddingHorizontal: 10
    },
    imageContainer:{
        flex: 1,
        width: "100%",
        justifyContent:"center",
        alignItems:"center",
        overflow: "hidden"
    },
    textContainer:{
        flex: 0.4,
        width: "80%",
        alignItems: "center",
        gap: 24
    },
    title:{
        fontSize: 35,
        fontWeight: "800",
        textAlign: "center",
        color: "#3e7bfe",
        lineHeight: 40
    },
    subtitle:{
        fontSize: 20,
        color: "#6B7280",
        textAlign: "center",
        lineHeight: 25
    },
    button:{
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
    }
})