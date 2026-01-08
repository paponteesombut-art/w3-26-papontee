import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import { useState } from "react";
import { router } from "expo-router";

export default function Circle() {
  const [radius, setRadius] = useState("");
  const [area, setArea] = useState("");

  function calCircle() {
    const r = parseFloat(radius);
    if (isNaN(r)) {
      setArea("");
      return;
    }
    setArea((Math.PI * r * r).toFixed(2));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.MainTitle}>คำนวณพื้นที่วงกลม</Text>

      <TextInput
        style={styles.TextInput}
        placeholder="กรอกรัศมี"
        keyboardType="number-pad"   // ✅ สำคัญ
        value={radius}
        onChangeText={setRadius}
      />

      <Button title="คำนวณ" onPress={calCircle} />

      <Text>พื้นที่: {area} ตร.ซม.</Text>

      <Button
        title="กลับหน้าสี่เหลี่ยม"
        onPress={() => router.navigate("/square")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  MainTitle: {
    fontSize: 20,
    fontWeight: "700",
  },
  TextInput: {
    borderWidth: 1,
    width: "80%",
    padding: 10,
  },
});