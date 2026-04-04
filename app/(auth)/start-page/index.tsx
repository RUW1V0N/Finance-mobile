import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import logo from "@/assets/logo/logo.png"
import {styles} from "./styles"

export default function Start() {
    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>All your money in one app!</Text>
                    <Text style={styles.subTitle}>Manage everything without switching apps, no complexity — just what you need</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image source={logo} style={styles.image} resizeMode="contain" />
                </View>
                <View style={styles.buttonContainer}>
                    <Pressable style={styles.button}>
                        <Text style={styles.primaryText}>Log In</Text>
                    </Pressable>
                    <Pressable style={[styles.button, styles.secondaryButtonStyle]}>
                        <Text style={[styles.primaryText, styles.secondaryTextStyle]}>Sign Up</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}
