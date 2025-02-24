// components/DynamicForm.js
import React from "react";
import { View, StyleSheet } from "react-native";
import TextField from "./TextField";
import DateTimeField from "./DateTimeField";
import RadioButtonField from "./RadioButtonField";
import DrawingField from "./DrawingField";

const DynamicForm = ({ formData }) => {
  const renderField = (field) => {
    switch (field.type[0]) {
      case "text":
        return <TextField key={field.label[0]} label={field.label[0]} />;
      case "datetime":
        return <DateTimeField key={field.label[0]} label={field.label[0]} />;
      case "radio":
        return (
          <RadioButtonField
            key={field.label[0]}
            label={field.label[0]}
            options={field.options[0].option}
          />
        );
      case "drawing":
        return <DrawingField key={field.label[0]} />;
      default:
        return null;
    }
  };

  return <View style={styles.container}>{formData.map(renderField)}</View>;
};

const styles = StyleSheet.create({
  container: { padding: 20 },
});

export default DynamicForm;
