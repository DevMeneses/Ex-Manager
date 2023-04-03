import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React from 'react'

import { Entypo } from '@expo/vector-icons';

import { useNavigation, useRoute, RouteProp } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackPramsList } from '../../routes/app.routes'

import { api } from '../../services/api';

type RouteDetailParams = {
  FinishOrder: {
    number: string | number;
    order_id: string;
  }
}

type FinishOrderRouteProps = RouteProp<RouteDetailParams, 'FinishOrder'>

export default function FinishOrder() {
  const route = useRoute<FinishOrderRouteProps>()

  const navigation = useNavigation<NativeStackNavigationProp<StackPramsList>>()

  async function handleFinish(){
    try{
      await api.put('/order/send', {
        order_id: route.params?.order_id
      })
      navigation.popToTop()
    }catch(err){
      console.log(err)
    }
  }

    return (
      <View style={styles.container}>
        <Text style={styles.alert}>Você deseja finalizar esse pedidio?</Text>
        <Text style={styles.title}>Mesa: {route.params?.number}</Text>

        <TouchableOpacity style={styles.button} onPress={handleFinish}>
          <Text style={styles.txtButton}>Finalizar Pedido</Text>
          <Entypo name='shopping-cart' size={20} color="#1d1d2e"/>
        </TouchableOpacity>
      </View>
    )
  
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#1d1d2e',
        paddingVertical: '5%',
        paddingHorizontal: '5%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    alert:{
      fontSize: 20,
      color: "#fff",
      fontWeight: 'bold',
      marginBottom: 12
    },
    title:{
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 12,
      color: "#fff",
    },
    button:{
      backgroundColor: '#3fffa3',
      flexDirection: 'row',
      width: '65%',
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10
    },
    txtButton:{
      fontSize: 18,
      marginRight: 8,
      fontWeight: 'bold',
      color: '#1d1d2e'
    }
})