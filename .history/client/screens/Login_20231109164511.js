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
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";

export default function Login() {
  const navigation = useNavigation();
  const [name, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSuccessModalVisible, setSuccessModalVisible] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleLogin = async () => {
    try {
      // Send a POST request to the login endpoint of your server
      const response = await axios.post("http://localhost:3000/api/login", {
        name,
        password,
      });

      if (response.status === 200) {
        // Login successful, you can navigate to the authenticated section of your app or perform other actions.
        navigation.navigate("Menu");
      } else {
        console.error("Login Failed");
        // Handle login failure, you can show an error message
      }
      setSuccessModalVisible(true);
      setLoginSuccess(true);
    } catch (err) {
      console.error("Login Failed", err);
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
          <Image source={require("../Images/login.png")} style={styles.image} />
        </View>
      </SafeAreaView>
      <View style={styles.formContainer}>
        <View style={styles.form}>
          <Text style={styles.inputLabel}>Username</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Name"
            onChangeText={setUsername}
          />
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Password"
            secureTextEntry
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
            <Text style={styles.loginButtonText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signupContainer}>
          <Text style={styles.LoginText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={styles.LoginLink}>REGISTER</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal isVisible={invalid}>
        <View style={styles.modalContainer}>
          {loginSuccess && <Icon name="check" size={50} color="green" />}
          <Text style={styles.modalTitle}>Login Failed</Text>
          <Text style={styles.modalText}>Please Try agaian</Text>
          <TouchableOpacity
            onPress={() => {
              setSuccessModalVisible(false);
            }}
            style={styles.modalButton}
          >
            <Text style={styles.modalButtonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <Modal isVisible={isSuccessModalVisible}>
        <View style={styles.modalContainer}>
          {loginSuccess && <Icon name="check" size={50} color="green" />}
          <Text style={styles.modalTitle}>Login Successful</Text>
          <Text style={styles.modalText}>You are now logged in.</Text>
          <TouchableOpacity
            onPress={() => {
              setSuccessModalVisible(false);
            }}
            style={styles.modalButton}
          >
            <Text style={styles.modalButtonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
    marginTop: 8,
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
  loginButton: {
    paddingVertical: 10,
    backgroundColor: "#FFD95A",
    borderRadius: 20,
    marginTop: 12,
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
  modalContainer: {
    backgroundColor: "#7EAEF2",
    padding: 30,
    borderRadius: 20,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  modalText: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: "yellow",
    borderRadius: 30,
    marginTop: 30,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  modalButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "gray",
  },
});
