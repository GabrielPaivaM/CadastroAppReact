import { Text, View, ScrollView, SafeAreaView, StyleSheet, Platform } from 'react-native';
import React, { useState } from 'react';
import UserForm from "./components/userForm";
import {labels} from "./constants/labels";

export default function App() {
  const [users, setUsers] = useState([]);

  const handleAddUser = (name, phone) => {
    setUsers([...users, { name, phone }]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{labels.title}</Text>
      <UserForm onAddUser={handleAddUser} />
      <ScrollView style={styles.scroll}>
        
        {users.map((user, index) => (
          <View key={index}>
            <Text style={styles.userItem1}>Nome: {user.name}</Text>
            <Text style={styles.userItem2}>Telefone: {user.phone}</Text>
          </View>
        ))}

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: {
    ...Platform.select({
      android: {
        fontSize: 24, fontWeight: "bold", marginBottom: 10, textAlign: "center", marginTop: 40 
      },
      ios: {
        fontSize: 24, fontWeight: "bold", marginBottom: 10, textAlign: "center" 
      },
    }),
  },
  scroll: { marginTop: 10 },
  userItem1: {
    backgroundColor: "#F0F0F0",
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginHorizontal: 20,
  },
  userItem2: {
    backgroundColor: "#F0F0F0",
    padding: 10,
    marginVertical: 4,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginHorizontal: 20,
  },
});
