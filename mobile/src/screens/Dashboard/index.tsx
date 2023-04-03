import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert
} from "react-native";
import React, { useContext, useState } from "react";

import { useNavigation } from '@react-navigation/native'

import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackPramsList } from '../../routes/app.routes'

import { AuthContext } from '../../contexts/AuthContext'

import { FontAwesome } from "@expo/vector-icons";

import { api } from "../../services/api";

export default function Dashboard() {
  const navigation = useNavigation<NativeStackNavigationProp<StackPramsList>>()

  const [number, setNumber] = useState('')

  const { signOut } = useContext(AuthContext)


  async function openOrder(){
    if(number === ''){
      Alert.alert('Sujeito Pizzaria', 'Por Favor!! Digite um número de mesa!!')
      return;
    }

    const response = await api.post('/order', {
      table: Number(number)
    })


     navigation.navigate('Order', { number: number, order_id: response.data.id })
    setNumber('')

  }
 
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Novo Pedido</Text>

      <TextInput
        style={styles.input}
        placeholder="Número da Mesa"
        placeholderTextColor="#f0f0f0"
        keyboardType="numeric"
        value={number}
        onChangeText={setNumber}
      />

      <TouchableOpacity style={styles.button} onPress={openOrder}>
        <Text style={styles.buttonTxt}>Abrir Mesa</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ alignItems: "center" }} onPress={signOut}>
        <FontAwesome
          name="sign-out"
          size={40}
          color="white"
          style={styles.signOut}
        />
        <Text style={{ color: "#fff", fontWeight: "bold" }}>
          Trocar de Conta
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    backgroundColor: "#1d1d2e",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 24,
  },
  input: {
    width: "90%",
    height: 60,
    backgroundColor: "#101025",
    borderRadius: 10,
    paddingHorizontal: 8,
    textAlign: "center",
    fontSize: 22,
    color: "#fff",
  },
  button: {
    width: "90%",
    height: 40,
    backgroundColor: "#3fffa3",
    borderRadius: 10,
    marginVertical: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTxt: {
    fontSize: 18,
    color: "#101026",
    fontWeight: "bold",
  },

  signOut: {
    marginTop: 25
  },
});
