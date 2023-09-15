import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { RouterProps } from "./List";
import { LinearGradient } from "expo-linear-gradient";

export default function Home({ navigation }: RouterProps) {
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={[ "#68cafe", "#6a61cd"]} // Define your gradient colors
        style={styles.gradient}
      >
        <Text style={styles.welcome}>Welcome</Text>
        <Text style={styles.para}>
          The simplest online invoicing app for freelancers.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("CreateBill")}
        >
          <Text style={styles.text}>Create Bill</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6ebcf7",
    alignItems: "center",
    flexDirection: "column",
    // padding: 70,
    // paddingHorizontal: 20,
    position: "relative",
  },
  gradient: {
    flex: 1,
    backgroundColor: "#6ebcf7",
    alignItems: "center",
    flexDirection: "column",
    padding: 70,
    paddingHorizontal: 20,
    position: "relative",
    width: "100%",
    height: "100%",
  },
  para: {
    textAlign: "center",
    fontSize: 30,
    maxWidth: "82%",
    marginTop: 100,
    color: "white",
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  button: {
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    height: "8%",
    width: "100%",
    position: "absolute",
    bottom: 20,
    flex: 1,
    justifyContent: "center",
  },
  welcome: {
    fontSize: 30,
    color: "white",
    fontWeight: "600",
  },
  text: {
    fontSize: 24,
    color: "#313a40",
    fontWeight: "700",
    fontFamily: "Poppins",
  },
});
