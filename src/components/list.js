import React from 'react'
import {View,Text,Image,StyleSheet} from 'react-native'

const Card = ({key,name,username,email,address,phone}) => {
  return (
    <View style={{borderColor:"#444",borderWidth:1,paddingVertical:10,paddingHorizontal:20,borderRadius:20}}>
      <Text>Name: {name}</Text>
      <Text>Username: {username}</Text>
      <Text>Email: {email}</Text>
      <Text>Address: {address}</Text>
      <Text>Phone: {phone}</Text>
    </View>
  )
}

export default Card;
