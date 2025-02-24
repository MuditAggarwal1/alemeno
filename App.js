import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Button,
  TextInput,
  StyleSheet,
  Alert,
} from "react-native";
import { parseXML } from "./utils/xmlParser";
import DynamicForm from "./components/DynamicForm";
// import * as DocumentPicker from "expo-document-picker";

const App = () => {
  const [formData, setFormData] = useState(null);
  const [userInput, setUserInput] = useState("");

  const predefinedXML = `
    <form>
      <field>
        <type>text</type>
        <label>Name</label>
      </field>
      <field>
        <type>datetime</type>
        <label>Date of Birth</label>
      </field>
      <field>
        <type>radio</type>
        <label>Gender</label>
        <options>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </options>
      </field>
      <field>
        <type>drawing</type>
        <label>Signature</label>
      </field>
    </form>
  `;

  const handlePredefinedForm = async () => {
    try {
      const parsedData = await parseXML(predefinedXML);
      setFormData(parsedData.form.field);
    } catch (error) {
      Alert.alert("Error", "Failed to parse predefined XML");
    }
  };

  const handleUserForm = async () => {
    try {
      const parsedData = await parseXML(userInput);
      setFormData(parsedData.form.field);
    } catch (error) {
      Alert.alert("Error", "Invalid XML");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Button
          title="Render Form from XML File"
          onPress={handlePredefinedForm}
        />
        <TextInput
          style={styles.textInput}
          multiline
          numberOfLines={4}
          placeholder="Enter XML here"
          value={userInput}
          onChangeText={setUserInput}
        />
        <Button title="Render Form from XML Input" onPress={handleUserForm} />
        {formData && <DynamicForm formData={formData} />}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
  },
  textInput: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
  },
});

export default App;
