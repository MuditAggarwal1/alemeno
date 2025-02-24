import React from "react";
import { View, TextInput, Text, Button } from "react-native";
import Svg, { Path } from "react-native-svg";

const FormRenderer = ({ formFields }) => {
  if (!formFields || !formFields.root) return null;

  const renderField = (field) => {
    const { type, label, ...rest } = field.$;
    switch (type) {
      case "text":
        return (
          <View key={label} style={{ marginVertical: 10 }}>
            <Text>{label}</Text>
            <TextInput style={{ borderWidth: 1, padding: 10 }} {...rest} />
          </View>
        );
      case "datetime":
        return (
          <View key={label} style={{ marginVertical: 10 }}>
            <Text>{label}</Text>
            <TextInput style={{ borderWidth: 1, padding: 10 }} {...rest} />
          </View>
        );
      case "radio":
        return (
          <View key={label} style={{ marginVertical: 10 }}>
            <Text>{label}</Text>
            {rest.options.split(",").map((option) => (
              <View
                key={option}
                style={{ flexDirection: "row", alignItems: "center" }}
              >
                <Text>{option}</Text>
                <TextInput style={{ borderWidth: 1, padding: 10 }} {...rest} />
              </View>
            ))}
          </View>
        );
      case "drawing":
        return (
          <View key={label} style={{ marginVertical: 10 }}>
            <Text>{label}</Text>
            <Svg height="200" width="200" {...rest}>
              <Path d="M0 0 L100 100" stroke="black" />
            </Svg>
          </View>
        );
      default:
        return null;
    }
  };

  return <View>{formFields.root.field.map(renderField)}</View>;
};

export default FormRenderer;
