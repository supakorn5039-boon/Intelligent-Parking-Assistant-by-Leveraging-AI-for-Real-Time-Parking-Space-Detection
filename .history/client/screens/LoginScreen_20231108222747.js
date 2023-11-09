import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login() {
  const navigation = useNavigation();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const handleLogin = async () => {
    const response = await fetch("https://www.melivecode.com/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: Json.stringify({
        username: username,
        password: password,
        expiresIn: 60000,
      }),
    });const data = await response.json()
    co

  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <ArrowLeftIcon size={20} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          <Image source={require("../Images/login.png")} style={styles.image} />
        </View>
      </SafeAreaView>
      <View style={styles.formContainer}>
        <View style={styles.form}>
          <Text style={styles.inputLabel}>Username</Text>

          <TextInput
            style={styles.textInput}
            value={username}
            onChangeText={setUsername}
            placeholder="Enter Name"
          />

          <Text style={styles.inputLabel}>Password</Text>

          <TextInput
            style={styles.textInput}
            value={password}
            onChangeText={setPassword}
            placeholder="Enter Password"
          />

          <TouchableOpacity
            onPress={() => navigation.navigate("Map")}
            style={styles.loginButton}
          >
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.orText}>Or</Text>
        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={require("../assets/Icons/google.png")}
              style={styles.socialIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={require("../assets/Icons/apple.png")}
              style={styles.socialIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.signupContainer}>
          <Text style={styles.LoginText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text style={styles.LoginLink}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7EAEF2",
  },
  header: {
    flexDirection: "row",
    justifyContent: "start",
  },
  backButton: {
    backgroundColor: "#FFD95A",
    padding: 8,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    marginLeft: 16,
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
  formContainer: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  form: {
    marginBottom: 20,
  },
  inputLabel: {
    color: "gray",
    marginLeft: 16,
  },
  textInput: {
    padding: 16,
    backgroundColor: "#F0F0F0",
    borderRadius: 20,
    marginBottom: 10,
  },
  forgotPasswordButton: {
    alignItems: "flex-end",
  },
  forgotPasswordText: {
    color: "gray",
    textAlign: "right",
  },
  loginButton: {
    paddingVertical: 10,
    backgroundColor: "#FFD95A",
    borderRadius: 20,
  },
  loginButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "gray",
  },
  orText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "gray",
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    spaceEvenly: 12,
  },
  socialButton: {
    padding: 2,
    backgroundColor: "#F0F0F0",
    borderRadius: 20,
  },
  socialIcon: {
    width: 40,
    height: 40,
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 7,
  },
  LoginText: {
    color: "gray",
    fontWeight: "600",
    fontSize: 18,
    marginRight: 5,
  },
  LoginLink: {
    fontWeight: "600",
    color: "#2D58E4",
    fontSize: 18,
    textDecorationLine: "underline",
  },
});
