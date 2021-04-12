import React, {useState,useEffect} from 'react'
import {ScrollView} from 'react-native'
import Axios from 'axios'
import Card from '../../src/components/list.js'

const UserList = () => {
  const[users,setUsers] = useState([]);

  useEffect(()=>{
    Axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=>{setUsers(res.data)})
  },[])

  return (
    <ScrollView>
        {
          users.map(item=>(
            <Card key={item.id}
              name={item.name}
              username={item.username}
              email={item.email}
              address={item.address.city}
              phone={item.phone}/>
          ))
        }

    </ScrollView>
  )
}

export default UserList
