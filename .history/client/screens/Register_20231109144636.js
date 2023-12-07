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
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/FontAwesome"; // Import FontAwesome icon set

export default function Register() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isSuccessModalVisible, setSuccessModalVisible] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleRegistration = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/register", {
        name,
        password,
      });

      if (response.status === 200) {
        setSuccessModalVisible(true);
        setRegistrationSuccess(true);
      } else {
        console.error("Registration Failed");
      }
    } catch (err) {
      console.error("Network Error", err);
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
            placeholder="Enter Username"
            onChangeText={setName}
          />
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={setPassword}
            placeholder="Enter Password"
            secureTextEntry
          />
          <TouchableOpacity
            onPress={handleRegistration}
            style={styles.SignButton}
          >
            <Text style={styles.SignButtonText}>REGISTER</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.signupLink}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Customized Success Modal with Checkmark Icon */}
      <Modal isVisible={isSuccessModalVisible}>
        <View style={styles.modalContainer}>
          {registrationSuccess && <Icon name="check" size={50} color="green" />}
          <Text style={styles.modalTitle}>Registration Successful</Text>
          <Text style={styles.modalText}>You can now log in.</Text>
          <TouchableOpacity
            onPress={() => {
              setSuccessModalVisible(false);
              navigation.navigate("Login");
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
  modalContainer: {
    backgroundColor: #, // Background color set to yellow
    padding: 30, // Increased padding for a larger box
    borderRadius: 20, // Adjusted border radius for a rounded box
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20, // Adjusted font size for the title
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10, // Increased margin for additional space
  },
  modalText: {
    fontSize: 18, // Adjusted font size for the text
    textAlign: "center",
    marginBottom: 20, // Increased margin for additional space
  },
  modalButton: {
    backgroundColor: "yellow", // Background color set to yellow
    borderRadius: 30, // Increased border radius for a more rounded button
    marginTop: 30, // Increased margin-top for more space
    paddingVertical: 15, // Increased padding for a larger button
    paddingHorizontal: 30, // Increased horizontal padding for a wider button
  },
  modalButtonText: {
    fontSize: 20, // Increased font size for the button text
    fontWeight: "bold",
    textAlign: "center",
    color: "gray",
  },
});
