import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  ActivityIndicator
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { useRouter } from "expo-router";

import * as SecureStore from "expo-secure-store";

import { useDispatch } from "react-redux";
import { setToken } from "@/src/store/authSlice";

import { signupRequest } from "@/src/services/authService";

import image from "@/assets/auth/signup/signup.png";
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
  emptyCredentials: "Please enter a valid name and email and password",
  nameRequired: "Please enter name",
  emailRequired: "Please enter email",
  passwordRequired: "Please enter password", 
  confirmPasswordRequired: "Please confirm password", 
  passwordsNotMatch: 'The "Password" field and the "Confirm Password" field do not match.', 
  invalidCredentials: "Invalid name or email or password",
};

type ValidationResult = {
  name: boolean;
  email: boolean;
  password: boolean;
  confirmPassword: boolean;
  message: string;
};

const getValidationState = (
  name: string,
  email: string,
  password: string,
  confirmPassword: string
): ValidationResult => {
  const result: ValidationResult = {
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
    message: "",
  };

  const hasName = Boolean(name.trim());
  const hasEmail = Boolean(email.trim());
  const hasPassword = Boolean(password);
  const hasConfirmPassword = Boolean(confirmPassword);

  if (!hasName && !hasEmail && !hasPassword && !hasConfirmPassword) {
    result.name = true;
    result.email = true;
    result.password = true;
    result.confirmPassword = true;
    result.message = ERROR_MESSAGES.emptyCredentials;
    return result;
  }

  if (!hasName) {
    result.name = true;
  }

  if (!hasEmail) {
    result.email = true;
  }

  if (!hasPassword) {
    result.password = true;
  }

  if (!hasConfirmPassword) {
    result.confirmPassword = true;
  }

  if (hasPassword && hasConfirmPassword && password !== confirmPassword) {
    result.password = true;
    result.confirmPassword = true;
    result.message = ERROR_MESSAGES.passwordsNotMatch;
    return result;
  }

  if (result.name) {
    result.message = ERROR_MESSAGES.nameRequired;
    return result;
  }

  if (result.email) {
    result.message = ERROR_MESSAGES.emailRequired;
    return result;
  }

  if (result.password) {
    result.message = ERROR_MESSAGES.passwordRequired;
    return result;
  }

  if (result.confirmPassword) {
    result.message = ERROR_MESSAGES.confirmPasswordRequired;
    return result;
  }

  return result;
};

export default function SignUp(){
  const router = useRouter();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isVisibilityPassword, setIsVisibilityPassword]= useState(false);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  
  const handleSignUp= async () =>{
    setError("");
    setNameError(false);
    setEmailError(false);
    setPasswordError(false);
    setConfirmPasswordError(false);

    const validation = getValidationState(name, email, password, confirmPassword);
    setNameError(validation.name);
    setEmailError(validation.email);
    setPasswordError(validation.password);
    setConfirmPasswordError(validation.confirmPassword);
    setError(validation.message);

    if (validation.name || validation.email || validation.password || validation.confirmPassword) {
      return;
    }

    try{
      setLoading(true);

      const data = await signupRequest(name, email, password, confirmPassword);

      await SecureStore.setItemAsync("access_token", data.access_token);
      dispatch(setToken(data.access_token));

      router.push("/(tabs)");
    } catch (error: any) {
      const message = error.message || ERROR_MESSAGES.invalidCredentials;
      setError(message);
      if (message === ERROR_MESSAGES.invalidCredentials) {
        setNameError(true);
        setEmailError(true);
        setPasswordError(true);
        setConfirmPasswordError(true);
      }
    } finally {
      setLoading(false);
    }
  };

  const isTopError =
    error === ERROR_MESSAGES.invalidCredentials ||
    error === ERROR_MESSAGES.emptyCredentials 

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
            <View style={[styles.inputContainer, nameError && styles.inputError]}>
              <Email />
              <Text style={styles.inputLabel}>Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Name"
                placeholderTextColor="#c9c9c9"
                value={name}
                onChangeText={(text) => {
                  setName(text);
                  if (nameError) setNameError(false);
                  if (error) setError("");
                }}
              />
            </View>
            {nameError ? (
              <Text style={styles.errorLabel}>
                {error === ERROR_MESSAGES.passwordsNotMatch
                  ? ERROR_MESSAGES.passwordsNotMatch
                  : ERROR_MESSAGES.nameRequired}
              </Text>
            ) : null}
          </View>
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
              <Text style={styles.errorLabel}>
                {error === ERROR_MESSAGES.passwordsNotMatch
                  ? ERROR_MESSAGES.passwordsNotMatch
                  : ERROR_MESSAGES.emailRequired}
              </Text>
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
              <Text style={styles.errorLabel}>
                {error === ERROR_MESSAGES.passwordsNotMatch
                  ? ERROR_MESSAGES.passwordsNotMatch
                  : ERROR_MESSAGES.passwordRequired}
              </Text>
            ) : null}
          </View>
          <View style={styles.wrapper}>
            <View style={[styles.inputContainer, confirmPasswordError && styles.inputError]}>
              <Password />
              <Text style={styles.inputLabel}>Confirm password</Text>
              <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                placeholderTextColor="#c9c9c9"
                value={confirmPassword}
                onChangeText={(text) => {
                  setConfirmPassword(text);
                  if (confirmPasswordError) setConfirmPasswordError(false);
                  if (error) setError("");
                }}
                secureTextEntry = {!isVisibilityPassword}
              />
              <Pressable  onPress={()=> setIsVisibilityPassword(prev => !prev)}>
                  {isVisibilityPassword ? <Visibility/> : <VisibilityOff/>}
              </Pressable>
            </View>
            {confirmPasswordError ? (
              <Text style={styles.errorLabel}>
                {error === ERROR_MESSAGES.passwordsNotMatch
                  ? ERROR_MESSAGES.passwordsNotMatch
                  : ERROR_MESSAGES.confirmPasswordRequired}
              </Text>
            ) : null}
          </View>

          <Pressable style={styles.forgotButton}>
            <Text style={styles.textForgotButton}>Forgot Password?</Text>
          </Pressable>
          <Pressable
            style={styles.loginButton}
            onPress={handleSignUp}
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
                <Text style={styles.textButton}>Sign Up</Text>
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
          <Text style={styles.footerText}>Already have an account?</Text>
          <Pressable style={styles.footerButton} onPress={() => router.push("/login")}>
            <Text style={styles.textButtonFooter}>Login</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}