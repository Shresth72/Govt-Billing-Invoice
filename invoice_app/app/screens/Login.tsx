import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  Button,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { FIREBASE_AUTH } from "../../Firebase.config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { LinearGradient } from "expo-linear-gradient";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
    } catch (error: any) {
      console.log(error);
      alert("Sign in failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
      alert("Check your emails!");
    } catch (error: any) {
      console.log(error);
      alert("Sign up failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding">
        <Text style={styles.heading}>Welcome Back!</Text>
        <Text style={styles.details}>Enter your details:</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            value={email}
            placeholder="Email"
            autoCapitalize="none"
            onChange={(event) => setEmail(event.nativeEvent.text)}
          ></TextInput>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#6a61cd", "#68cafe"]}
            style={styles.gradientBorder}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            value={password}
            secureTextEntry={true}
            placeholder="Password"
            autoCapitalize="none"
            onChange={(event) => setPassword(event.nativeEvent.text)}
          ></TextInput>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#6a61cd", "#68cafe"]}
            style={styles.gradientBorder}
          />
        </View>

        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <View>
            <TouchableOpacity onPress={signIn} style={styles.button}>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#6a61cd", "#68cafe"]} // Define your gradient colors
                style={styles.gradient}
              >
                <Text style={styles.text}>LOGIN</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity onPress={signUp} style={styles.button}>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#6a61cd", "#68cafe"]} // Define your gradient colors
                style={styles.gradient}
              >
                <Text style={styles.text}>SIGNUP</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        )}
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
    justifyContent: "center",
  },
  input: {
    height: 50,
    padding: 10,
    paddingLeft: 0,
    backgroundColor: "transparent",
    borderWidth: 0,
    borderBottomWidth: 2,
    borderColor: "transparent",
    marginBottom: 20,
  },
  gradientBorder: {
    position: "absolute",
    right: 0,
    bottom: 20,
    left: 0,
    height: 2,
  },
  heading: {
    fontSize: 30,
    fontWeight: "700",
    fontFamily: "Poppins",
  },

  details: {
    opacity: 0.3,
    marginBottom: 40,
  },
  inputView: {
    position: "relative",
  },
  inputText: {
    opacity: 0.3,
  },
  button: {
    marginTop: 4,
  },
  gradient: {
    padding: 10,
    borderRadius: 3,
  },
  text: {
    color: "white",
    width: "100%",
    textAlign: "center",
  },
});
