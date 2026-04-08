import { View, Text, Image, Pressable, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { useRouter } from "expo-router";

import * as SecureStore from 'expo-secure-store';

import { useDispatch } from "react-redux";
import {setToken} from "@/src/store/authSlice";

import { loginRequest } from "@/src/services/authService";

import image from "@/assets/auth/login.png"
import {styles} from "./styles"


export default function Login(){
    const router = useRouter();
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async()=>{
        try{
            setLoading(true);

            if (!email || !password) return setError("Invalid email or password");
            const data = await loginRequest(email, password);

            if (!data.access_token){
                throw new Error("No token")
            }

            await SecureStore.setItemAsync('token', data.access_token);
            dispatch(setToken(data.access_token));

            router.replace('/(tabs)/home');
        } catch (e) {
            console.log("Error: ", e);
        } finally {
            setLoading(false);
        }
    };

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fefefe" }}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={image}
              style={{ width: "100%", height: "100%" }}
              resizeMode="contain"
            />
          </View>
          <View style={styles.loginContainer}>
            <Text style={styles.title}>Welcome</Text>
            <View style={styles.emailContainer}>
                <Text style={styles.emailText}>Email</Text>
                <TextInput placeholder="Enter Email" value={email} onChangeText={setEmail}/>
            </View>
            <View style={styles.passwordContainer}>
                <Text style={styles.passwordText}>Password</Text>
                <TextInput placeholder="Enter Password" value={password} onChangeText={setPassword} secureTextEntry/>
            </View>
            <Pressable style={styles.forgotButton}>
                <Text style={styles.textForgotButton}>Forgot Password?</Text>
            </Pressable>
            <Pressable style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.textLoginButton}>{loading ? 'Loading...' : 'Login'}</Text>
            </Pressable>
            <View style={styles.footerContainer}>
                <Text style={styles.footerText}>Don't have an account?</Text>
                <Pressable style={styles.signupButton}>
                    <Text style={styles.textSignup}>Sign Up</Text>
                </Pressable>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
}