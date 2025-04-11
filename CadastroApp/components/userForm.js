import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet, Platform, Text} from "react-native";
import Toast from 'react-native-toast-message';
import { labels } from "../constants/labels";

export default function UserForm({ onAddUser }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleAdd = () => {
    if (name.trim() !== "" && phone.trim() !== "") {
      onAddUser(name, phone);
      setName("");
      setPhone("");

      Toast.show({
        type: 'success',
        text1: 'Usuário adicionado!',
        text2: `${name} foi cadastrado com sucesso.`
      });
    } else {
      Toast.show({
        type: 'error',
        text1: 'Preencha todos os campos!'
      });
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={labels.namePlaceHolder}
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder={labels.phonePlaceHolder}
        value={phone}
        onChangeText={setPhone}
        style={styles.input}
        keyboardType="phone-pad"
      />
      <TouchableOpacity
        style={styles.button} 
        onPress={handleAdd}>
        <Text style={styles.buttonText}>{labels.addButton}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 20, marginTop: 20,},
  input: {
    borderWidth: 1,
    marginHorizontal: 40,
    padding: 8,
    marginBottom: 15,
    borderRadius: 20,
  },
  button: {
  backgroundColor: "#32ea63",
  paddingVertical: 12,
  paddingHorizontal: 25,
  marginHorizontal: 30,
  borderRadius: 20,
  alignItems: "center",
  marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
