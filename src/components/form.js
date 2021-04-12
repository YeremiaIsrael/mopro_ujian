import React, {useState} from 'react'
import {View,TextInput,Button,Text,StyleSheet} from 'react-native'

const Forms = ()=>{
  const [name,setName] = useState();
  const [username,setUserame] = useState();
  const [email,setEmail] = useState();
  const [address,setAddress] = useState();
  const [number,setPhoneNumber] = useState();

   const onSubmit = ()=>{
    const data = {
      name:name,
      username:username,
      email:email,
      address:address,
      number:number
    }
  }

  return(
    <View style={style.container}>
      <Text style={style.title}>Registration</Text>
      <Text style={style.label}>Name</Text>
      <TextInput value={name} style={style.textInput} placeholder='input your name' onChangeText={e=>setName(e)} />
      <Text style={style.label}>Username</Text>
      <TextInput value={username} style={style.textInput} placeholder='input your username' onChangeText={e=>setUserame(e)} />
      <Text style={style.label}>Email</Text>
      <TextInput value={email} style={style.textInput} placeholder='input your email' onChangeText={e=>setEmail(e)} />
      <Text style={style.label}>Address</Text>
      <TextInput value={address} style={style.textInput} placeholder='input your address' onChangeText={e=>setAddress(e)} />
      <Text style={style.label}>Phone Number</Text>
      <TextInput value={number}
        style={style.textInput}
      placeholder='input your phone number' onChangeText={e=>{setPhoneNumber(e)}}/>
      <Button title='Register' style={style.buttonRegis} onPress={onSubmit}/>
    </View>
  )
}

export default Forms

const style = StyleSheet.create({
  title:{fontWeight:'bold',fontSize:42,marginBottom:30},
  container:{padding:20},
  label:{fontSize:19,fontWeight:'bold'},
  textInput:{borderRadius:20,borderColor: "#666",borderWidth:1,padding:7,marginVertical:10,},
  buttonRegis:{borderRadius: 20,backgroundColor:"#6fcf97",height:20,width:188,color:"#fff"}
})
