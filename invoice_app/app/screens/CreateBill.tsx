import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import dateFormat, { masks } from "dateformat";
import { Picker } from "@react-native-picker/picker";
import * as Print from "expo-print";
import { shareAsync } from "expo-sharing";
import { PdfCode } from "./PdfCode";
import * as React from "react";
import { LinearGradient } from "expo-linear-gradient";

const CreateBill = () => {
  const [name, set_Name] = useState("");
  const [Address, Set_Address] = useState("");
  const [Mobile_No, Set_Mobile_No] = useState("");
  const [Quantity, setQuantity] = useState("");
  const now = new Date();
  const [Invoice, setInvoice] = useState(dateFormat(now, "ddmmyyhhMss"));
  const [Product, Set_Product] = useState("मुरुम");
  const [Total, setTotal] = useState("");
  const [ReceivedBalance, SetReceivedBalance] = useState("");
  const [PaymentType, setPaymentType] = useState("Credit");
  const [RemaningBalance, setRemaningBalance] = useState("Paid");
  const [selectedPrinter, setSelectedPrinter] = React.useState();

  //   const print = async () => {
  //     // On iOS/android prints the given html. On web prints the HTML from the current page.
  //     await Print.printAsync({
  //       html,
  //       printerUrl: selectedPrinter?.url, // iOS only
  //     });
  //   };

  const printToFile = async () => {
    let html = PdfCode(
      name,
      Address,
      Mobile_No,
      Quantity,
      Invoice,
      Product,
      Total,
      ReceivedBalance,
      PaymentType,
      RemaningBalance
    );
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    try {
      const { uri } = await Print.printToFileAsync({
        html,
      });
      console.log("File has been saved to:", uri);
      await shareAsync(uri, { UTI: ".pdf", mimeType: "application/pdf" });

      set_Name("");
      setInvoice(dateFormat(now, "ddmmyyhhMss"));
      setTotal("");
      setQuantity("");
      SetReceivedBalance("");
      Set_Address("");
      Set_Mobile_No("");
    } catch (err) {
      Alert.alert(
        "Make shure You have Internet Connection or contact @+91 8530730017"
      );
    }
  };

  //   const selectPrinter = async () => {
  //     const printer = await Print.selectPrinterAsync(); // iOS only
  //     setSelectedPrinter(printer);
  //   };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.InputContainer}>
          <Text style={styles.text}>Full Name :</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => set_Name(text)}
            value={name}
            placeholder="Jason Richardson"
          />
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#6a61cd", "#68cafe"]}
            style={styles.gradientBorder}
          />
        </View>

        <View style={styles.InputContainer}>
          <Text style={styles.text}>Address : </Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => Set_Address(text)}
            value={Address}
            placeholder="Area, City"
          />
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#6a61cd", "#68cafe"]}
            style={styles.gradientBorder}
          />
        </View>

        <View style={styles.InputContainer}>
          <Text style={styles.text}>Mobile No : </Text>
          <TextInput
            style={styles.textInput}
            keyboardType="number-pad"
            onChangeText={(text) => Set_Mobile_No(text)}
            value={Mobile_No}
            placeholder="+91"
          />
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#6a61cd", "#68cafe"]}
            style={styles.gradientBorder}
          />
        </View>
        <View style={styles.InputContainer}>
          <Text style={styles.text}>Product : </Text>
          <View style={styles.PickerContainer}>
            <Picker
              selectedValue={Product}
              // style={styles.Picker}
              onValueChange={(itemValue, itemIndex) => Set_Product(itemValue)}
            >
              {/* 'ग्रिट (Grit)','दगड','Crash Sand','Plaster Sand' */}
              <Picker.Item label="मुरुम" value="मुरुम" />
              <Picker.Item label="खडी" value="खडी" />
              <Picker.Item label="वाळू" value="वाळू" />
              <Picker.Item label="माती" value="माती" />
              <Picker.Item label="ग्रिट (Grit)" value="ग्रिट (Grit)" />
              <Picker.Item label="दगड" value="दगड" />
              <Picker.Item label="Crash Sand" value="Crash Sand" />
              <Picker.Item label="Plaster Sand" value="Plaster Sand" />
            </Picker>
          </View>
        </View>
        <View style={styles.InputContainer}>
          <Text style={styles.text}>Quantity : </Text>
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            onChangeText={(text) => setQuantity(text)}
            value={Quantity}
            placeholder="12kg"
          />
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#6a61cd", "#68cafe"]}
            style={styles.gradientBorder}
          />
        </View>
        <View style={styles.InputContainer}>
          <Text style={styles.text}>Invoice No : </Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => setInvoice(text)}
            value={Invoice}
            placeholder="Invoice No"
          />
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#6a61cd", "#68cafe"]}
            style={styles.gradientBorder}
          />
        </View>
        {/* Total  */}
        <View style={styles.InputContainer}>
          <Text style={styles.text}>Total : </Text>
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            onChangeText={(text) => setTotal(text)}
            value={Total}
            placeholder="₹100"
          />
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#6a61cd", "#68cafe"]}
            style={styles.gradientBorder}
          />
        </View>

        {/* ReceivedBalance  */}
        <View style={styles.InputContainer}>
          <Text style={styles.text}>Received Amount : </Text>
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            onChangeText={(text) => SetReceivedBalance(text)}
            value={ReceivedBalance}
            placeholder="₹100"
          />
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#6a61cd", "#68cafe"]}
            style={styles.gradientBorder}
          />
        </View>
        {/* Remaining Balance  */}
        <View style={styles.InputContainer}>
          <Text style={styles.text}>Remaining Balance : </Text>
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            onChangeText={(text) => setRemaningBalance(text)}
            value={RemaningBalance}
            placeholder="Remaining Balance ₹"
          />
        </View>
        {/* Payment Method  */}
        <View style={styles.InputContainer}>
          <Text style={styles.text}>Payment Method : </Text>
          <View style={styles.PickerContainer}>
            <Picker
              selectedValue={PaymentType}
              // style={styles.Picker}
              onValueChange={(itemValue, itemIndex) =>
                setPaymentType(itemValue)
              }
            >
              {/* 'ग्रिट (Grit)','दगड','Crash Sand','Plaster Sand' */}
              <Picker.Item label="Credit" value="Credit" />
              <Picker.Item label="Cash" value="Cash" />
              <Picker.Item label="Other" value="Other" />
            </Picker>
          </View>
        </View>
        <View style={styles.CreateInvoiceButton}>
          {/* <Button title="Create Invoice" onPress={printToFile} /> */}
          <TouchableOpacity onPress={printToFile}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#6a61cd", "#68cafe"]} // Define your gradient colors
              style={styles.gradient}
            >
              <Text style={styles.createtext}>CREATE INVOICE</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //   alignItems: 'center',
    //   justifyContent: 'center',
  },
  tinyLogo: {
    width: 70,
    height: 70,
  },
  createtext: {
    color: "white",
    width: "100%",
    textAlign: "center",
  },
  text: {
    fontSize: 18,
    color: "#313a40",
    fontWeight: "600",
  },
  button: {
    alignItems: "center",
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 4,
  },
  InputContainer: {
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
    position: "relative",
  },
  gradientBorder: {
    position: "absolute",
    right: 0,
    bottom: 5,
    left: 0,
    height: 2,
  },
  textInput: {
    // width:100,
    marginTop: 4,
    height: 40,
    borderColor: "#000",
    borderWidth: 0,
    borderRadius: 4,
    // padding: 4,
    marginBottom: 6,
  },
  PickerContainer: {
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 4,
    height: 50,
  },
  CreateInvoiceButton: {
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
  },
  spacer: {
    height: 8,
  },
  printer: {
    textAlign: "center",
  },
  gradient: {
    padding: 10,
    borderRadius: 3,
  },
});

export default CreateBill;
