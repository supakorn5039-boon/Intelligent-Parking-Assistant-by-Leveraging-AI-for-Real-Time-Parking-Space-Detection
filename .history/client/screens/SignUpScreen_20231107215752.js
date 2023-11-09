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
import { themeColors } from "../theme/index";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          <Image
            source={require("../assets/Images/signup.png")}
            style={styles.image}
          />
        </View>
      </SafeAreaView>
      <View style={styles.formContainer}>
        <View style={styles.form}>
          <Text style={styles.inputLabel}>Username</Text>

          <TextInput
            style={styles.textInput}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter Username"
          />

          <Text style={styles.inputLabel}>Password</Text>

          <TextInput
            style={styles.textInput}
            value={password}
            onChangeText={setPassword}
            placeholder="Enter Password"
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={styles.SignButton}
          >
            <Text style={styles.SignButtonText}>SignUp</Text>
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
          <Text style={styles.signupText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.signupLink}>Login</Text>
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
    width: 180,
    height: 180,
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
  SignButton: {
    paddingVertical: 20,
    backgroundColor: "#FFD95A",
    borderRadius: 20,
    marginTop: 12,
  },
  SignButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "gray",
  },
  orText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
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
  signupText: {
    color: "gray",
    fontWeight: "600",
    fontSize: 18,
    marginRight: 5,
    marginBottom: 16,
  },
  signupLink: {
    fontWeight: "600",
    color: "#FFD95A",
    fontSize: 18,
    textDecorationLine: "underline",
  },
});
