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
import { styles } from "./styles";

const ERROR_MESSAGES = {
  emptyCredentials: "Please enter a valid email and password",
  emailRequired: "Please enter email",
  passwordRequired: "Please enter password",
  invalidCredentials: "Invalid email or password",
};

const getValidationError = (email, password) => {
  if (!email && !password) {
    return ERROR_MESSAGES.emptyCredentials;
  }

  if (!email) {
    return ERROR_MESSAGES.emailRequired;
  }

  if (!password) {
    return ERROR_MESSAGES.passwordRequired;
  }

  return "";
};

export default function Login() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      setLoading(true);

      const errorMessage = getValidationError(email, password);

      if (errorMessage) {
        setError(errorMessage);
        return;
      }

      const data = await loginRequest(email, password);

      if (!data.access_token) {
        throw new Error("No token");
      }

      await SecureStore.setItemAsync("access_token", data.access_token);
      dispatch(setToken(data.access_token));

      router.replace("/(tabs)/home");
    } catch (e) {
      setError(ERROR_MESSAGES.invalidCredentials);
    } finally {
      setLoading(false);
    }
  };

  const isEmptyCredentialsError = error === ERROR_MESSAGES.emptyCredentials;
  const isEmailError =
    error === ERROR_MESSAGES.emailRequired || isEmptyCredentialsError;
  const isPasswordError =
    error === ERROR_MESSAGES.passwordRequired || isEmptyCredentialsError;
  const isTopError =
    error === ERROR_MESSAGES.invalidCredentials || isEmptyCredentialsError;

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.container}>
        <View style={styles.loginContainer}>
          <Text style={styles.title}>Welcome</Text>
          {isTopError ? <Text style={styles.errorLabel}>{error}</Text> : null}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
              style={[styles.input, isEmailError && styles.inputError]}
              placeholder="Enter Email"
              value={email}
              onChangeText={setEmail}
            />
            {error === ERROR_MESSAGES.emailRequired ? (
              <Text style={styles.errorLabel}>{error}</Text>
            ) : null}
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              style={[styles.input, isPasswordError && styles.inputError]}
              placeholder="Enter Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            {error === ERROR_MESSAGES.passwordRequired ? (
              <Text style={styles.errorLabel}>{error}</Text>
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
            <Text style={styles.textLoginButton}>
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.textLoginButton}>Login</Text>
              )}
            </Text>
          </Pressable>
        </View>
        <View style={styles.line}>
          <Text style={styles.lineText}>log in with</Text>
        </View>
        <View style={styles.additionalLoginContainer}>
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
          <Pressable style={styles.signupButton}>
            <Text style={styles.textSignup}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
