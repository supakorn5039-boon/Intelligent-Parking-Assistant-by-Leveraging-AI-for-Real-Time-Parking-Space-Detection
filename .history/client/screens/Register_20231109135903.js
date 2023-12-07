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
import axios from "axios";

export default function Register({ navigation }) {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:3000/register", {
        name,
        password,
      });
      if (response.status === 200) {
        navigation.navigate("Login");
      } else {
        console.error("Registration Failed");
      }
    } catch {
      
    }
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
          <Image
            source={require("../Images/signup.png")}
            style={styles.image}
          />
        </View>
      </SafeAreaView>
      <View style={styles.formContainer}>
        <View style={styles.form}>
          <Text style={styles.inputLabel}>Username</Text>

          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={setName}
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
            <Text onPress={handleSubmit} style={styles.SignButtonText}>
              REGISTER
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.signupLink}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

// CSS
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
    marginTop: 8,
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
    paddingVertical: 10,
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
    color: "#1942D6",
    fontSize: 18,
    textDecorationLine: "underline",
  },
});
