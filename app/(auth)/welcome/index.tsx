import { View, Text, Pressable, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import image from "@/assets/auth/welcome-image.png"
import { styles } from "./styles";
import { useRouter } from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';


export default function Welcome() {
    const router = useRouter();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fefefe" }}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={image} style={{ width: "100%", height: "100%", }} resizeMode="contain" />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Welcome to ZentScope</Text>
                    <Text style={styles.subtitle}>Take control of your finances and build smarter money habits</Text>
                </View>
                <Pressable style={{width:"80%"}} onPress={() => router.replace("/slide")}>
                    <LinearGradient
                        colors={['#3B82F6', '#60A5FA']} // 🔥 градиент
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.button}>
                    <Text style={styles.textButton}>Get Started</Text>
                    </LinearGradient>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}