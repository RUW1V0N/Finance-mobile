import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "@/assets/logo/logo.png"
import { styles } from "./styles"
import { LinearGradient } from 'expo-linear-gradient';

export default function Start() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fefefe" }}>
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>All your money in one app</Text>
                    <Text style={styles.subTitle}>Manage everything without switching apps, no complexity — just what you need</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image source={logo} style={styles.image} resizeMode="contain" />
                </View>
                <View style={styles.buttonContainer}>
                    <Pressable style={{width: "100%"}}>
                        <LinearGradient
                            colors={['#3B82F6', '#60A5FA']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.button}>
                            <Text style={styles.primaryText}>Log In</Text>
                        </LinearGradient>
                    </Pressable>
                    <Pressable style={[styles.button, styles.secondaryButtonStyle]}>
                        <Text style={[styles.primaryText, styles.secondaryTextStyle]}>Sign Up</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}
