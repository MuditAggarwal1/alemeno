// components/RadioButtonField.js
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { RadioButton } from "react-native-paper";

const RadioButtonField = ({ label, options }) => {
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <View style={styles.field}>
      <Text>{label}</Text>
      {options.map((option) => (
        <View key={option} style={styles.option}>
          <RadioButton
            value={option}
            status={selectedValue === option ? "checked" : "unchecked"}
            onPress={() => setSelectedValue(option)}
          />
          <Text>{option}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  field: { marginVertical: 10 },
  option: { flexDirection: "row", alignItems: "center" },
});

export default RadioButtonField;
