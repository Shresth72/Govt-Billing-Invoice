import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { RouterProps } from "./List";

export default function Home({ navigation }: RouterProps) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require("../../assets/avada.png")}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("CreateBill")}
      >
        <Text>Create Bill</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  button: {
    alignItems: "center",
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 4,
  },
});
