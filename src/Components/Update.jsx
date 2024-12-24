import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Update() {
  const [userName,setUser] =useState("")
  const [userEmail,setEmail] =useState("")
  const [userCity,setCity] =useState("")
  const [userNumber,setNumber] =useState("")
  useEffect(() => {
    updateValue();
  },[]);
  console.log(userName);
  const navigation = useNavigate()
  
    const urlVal =useParams()
  // console.log(urlVal.id);
  
  async function updateValue() {
    const getvalues= await axios.get('https://674852945801f515359052cb.mockapi.io/reactvite/practice/'+ urlVal.id);
    console.log(getvalues);  
    setUser(getvalues.data.username)
    setCity(getvalues.data.city)
    setEmail(getvalues.data.email)
    setNumber(getvalues.data.number)
  }
  async function updatingVal(){
    await axios.put("https://674852945801f515359052cb.mockapi.io/reactvite/practice/"+urlVal.id,
      {
        username :userName,
        email:userEmail,
        city:userCity,
        number:userNumber,
      }
    )
    navigation('/read')
  }
  return (
    <div>Update
        <form>
          <label>Username</label>
          <input type="text" value={userName} onChange={(event) =>setUser(event.target.value)} />
          <label>Email</label>
          <input type="text" value={userEmail} onChange={(event)=>setEmail(event.target.value)} />
          <label>Phone</label>
          <input type="number" value={userNumber} onChange={(event)=> setNumber(event.target.value)} />
          <label>City</label>
          <input type="text" value={userCity} onChange={(event)=> setCity(event.target.value)} />
        </form>
        <button type='buttton' onClick={() => updatingVal()}>Update Data</button>  
    </div>
  )
}

export default Update