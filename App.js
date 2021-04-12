import React from 'react';
import {ScrollView} from 'react-native';
import Forms from './src/components/form.js'
import UserList from './src/components/userList.js'


const App = ()=>{
  return(
    <ScrollView>
      <Forms/>
      <UserList/>
    </ScrollView>
  )
}

export default App;
