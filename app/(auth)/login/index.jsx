import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { useRouter } from "expo-router";

import * as SecureStore from "expo-secure-store";

import { useDispatch } from "react-redux";
import { setToken } from "@/src/store/authSlice";

import { loginRequest } from "@/src/services/authService";

import image from "@/assets/auth/login/login.png";
import { GoogleIcon } from "@/app/components/auth/icon/google-icon";
import { Facebook } from "@/app/components/auth/icon/facebook";
import { AppleId } from "@/app/components/auth/icon/apple-id";
import { Email } from "@/app/components/auth/icon/email";
import { Password } from "@/app/components/auth/icon/password";
import { Visibility } from "@/app/components/auth/icon/visibility";
import { VisibilityOff } from "@/app/components/auth/icon/visibility-off";

import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";

const ERROR_MESSAGES = {
  emptyCredentials: "Please enter a valid email and password",
  emailRequired: "Please enter email",
  passwordRequired: "Please enter password", 
  invalidCredentials: "Invalid email or password",
};

const getValidationState = (email, password) => {
  const result = {
    email: false,
    password: false,
    message: "",
  };

  const hasEmail = Boolean(email.trim());
  const hasPassword = Boolean(password);

  if (!hasEmail && !hasPassword) {
    result.email = true;
    result.password = true;
    result.message = ERROR_MESSAGES.emptyCredentials;
    return result;
  }

  if (!hasEmail) {
    result.email = true;
  }

  if (!hasPassword) {
    result.password = true;
  }

  if (result.email) {
    result.message = ERROR_MESSAGES.emailRequired;
    return result;
  }

  if (result.password) {
    result.message = ERROR_MESSAGES.passwordRequired;
    return result;
  }

  return result;
};

export default function Login() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [isVisibilityPassword, setIsVisibilityPassword]= useState(false);

  const handleLogin = async () => {
    setError("");
    setEmailError(false);
    setPasswordError(false);

    const validation = getValidationState(email, password);
    setEmailError(validation.email);
    setPasswordError(validation.password);
    setError(validation.message);

    if (validation.email || validation.password) {
      return;
    }

    try {
      setLoading(true);

      const data = await loginRequest(email, password);

      if (!data.access_token) {
        throw new Error("No token");
      }

      await SecureStore.setItemAsync("access_token", data.access_token);
      dispatch(setToken(data.access_token));

      router.replace("/(tabs)/home");
    } catch (e) {
      setError(ERROR_MESSAGES.invalidCredentials);
      setEmailError(true);
      setPasswordError(true);
    } finally {
      setLoading(false);
    }
  };

  const isTopError =
    error === ERROR_MESSAGES.invalidCredentials ||
    error === ERROR_MESSAGES.emptyCredentials;

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.container}>
        <View style={styles.loginContainer}>
          <Text style={styles.title}>Welcome</Text>
          {isTopError ? <Text style={styles.errorLabel}>{error}</Text> : null}
          <View style={styles.wrapper}>
            <View style={[styles.inputContainer, emailError && styles.inputError]}>
              <Email />
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Email"
                placeholderTextColor="#c9c9c9"
                value={email}
                onChangeText={(text) => {
                  setEmail(text);
                  if (emailError) setEmailError(false);
                  if (error) setError("");
                }}
              />
            </View>
            {emailError ? (
              <Text style={styles.errorLabel}>{ERROR_MESSAGES.emailRequired}</Text>
            ) : null}
          </View>
          <View style={styles.wrapper}>
            <View style={[styles.inputContainer, passwordError && styles.inputError]}>
              <Password />
              <Text style={styles.inputLabel}>Password</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Password"
                placeholderTextColor="#c9c9c9"
                value={password}
                onChangeText={(text) => {
                  setPassword(text);
                  if (passwordError) setPasswordError(false);
                  if (error) setError("");
                }}
                secureTextEntry = {!isVisibilityPassword}
              />
              <Pressable  onPress={()=> setIsVisibilityPassword(prev => !prev)}>
                  {isVisibilityPassword ? <Visibility/> : <VisibilityOff/>}
              </Pressable>
            </View>
            {passwordError ? (
              <Text style={styles.errorLabel}>{ERROR_MESSAGES.passwordRequired}</Text>
            ) : null}
          </View>

          <Pressable style={styles.forgotButton}>
            <Text style={styles.textForgotButton}>Forgot Password?</Text>
          </Pressable>
          <Pressable
            style={styles.loginButton}
            onPress={handleLogin}
            disabled={loading}
          >
            <LinearGradient
              colors={["#3B82F6", "#60A5FA"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradienButton}
            >
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.textButton}>Login</Text>
              )}
            </LinearGradient>
          </Pressable>
        </View>
        <View style={styles.line}>
          <Text style={styles.lineText}>log in with</Text>
        </View>
        <View style={styles.additionalContainer}>
          <Pressable style={styles.additionalButton}>
            <GoogleIcon />
          </Pressable>
          <Pressable style={styles.additionalButton}>
            <Facebook />
          </Pressable>
          <Pressable style={styles.additionalButton}>
            <AppleId />
          </Pressable>
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Don't have an account?</Text>
          <Pressable style={styles.footerButton} onPress={()=>router.push("/signup")}>
            <Text style={styles.textButtonFooter}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
