// components/DateTimeField.js
import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const DateTimeField = ({ label }) => {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());
  let dateString = new Date(date);

  const onChangeDate = (event, selectedDate) => {
    setShow(false);
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  return (
    <View style={styles.field}>
      <Text>{label}</Text>
      <Button title="Select Date" onPress={() => setShow(true)} />
      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChangeDate}
        />
      )}
      <Text>{dateString.toDateString()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  field: { marginVertical: 10 },
});

export default DateTimeField;
