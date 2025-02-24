import React, { useRef, useState } from "react";
import { Animated, StyleSheet, View, Button } from "react-native";
import { Canvas, CanvasRef } from "@benjeau/react-native-draw";

const DrawingField = () => {
  const canvasRef = useRef(CanvasRef);

  const handleUndo = () => {
    canvasRef.current?.undo();
  };

  const handleClear = () => {
    canvasRef.current?.clear();
  };

  return (
    <>
      <Canvas
        ref={canvasRef}
        height={300}
        width={300}
        color="white"
        thickness={20}
        opacity={1}
        style={{ backgroundColor: "black", marginBottom: 20 }}
      />
      <View style={{ marginBottom: 20 }}>
        <Button title="Undo" onPress={handleUndo} />
      </View>
      <View style={{ marginBottom: 20 }}>
        <Button title="Clear" onPress={handleClear} />
      </View>
    </>
  );
};

export default DrawingField;
