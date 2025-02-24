// components/TextField.js
import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const TextField = ({ label, value, onChange }) => (
  <View style={styles.field}>
    <Text>{label}</Text>
    <TextInput style={styles.input} value={value} onChangeText={onChange} />
  </View>
);

const styles = StyleSheet.create({
  field: { marginVertical: 10 },
  input: { borderColor: "gray", borderWidth: 1, padding: 10 },
});

export default TextField;
