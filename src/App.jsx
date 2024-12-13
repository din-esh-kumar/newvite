import React, { useState } from 'react'
import axios from 'axios'

function App() {
  const [username, setusername] =useState('')
  const [email,setemail] =useState('')
  const [phone, setphone] =useState('')
  const [city, setcity] =useState('')
  const [loading, setloading] =useState(false)
  

  async function sendData(){
    setloading(true)
    try{
      const response =await axios.post('https://674852945801f515359052cb.mockapi.io/reactvite/practice',
        {
          username,
          email,
          city,
          number:phone,
        }
        );
        console.log(response);
    }
    catch{
      console.log('');
    }
    finally{
    setloading(false)
    }

  }
  // function sendData(){
  //   // console.log(username,email,phone,city);
  // }
  let sty={color :'red',fontSize :'2.5rem', height :'auto'};
  // function getval(event) {
  //   setusername(event.target.value)
  //   setuseremail(event.target.value)
  //   setuserphone(event.target.value)
  //   setusercity(event.target.value)
  // }
  // function getvalue(e) {
  // }
  return (
    <>
      <div>
        <h1 style={sty}>CRUD Operations</h1>
        <form>
          <label>Username</label>
          <input type="text" id='username' onChange={(event) =>setusername(event.target.value)} />
          <label>Email</label>
          <input type="text" id='useremail' onChange={(event)=>setemail(event.target.value)} />
          <label>Phone</label>
          <input type="text" id='userphone' onChange={(event)=> setphone(event.target.value)} />
          <label>City</label>
          <input type="text" id='usercity' onChange={(event)=> setcity(event.target.value)} />
        </form>
        <button type='buttton' onClick={()=>sendData()}>Send Data</button>  
      </div>
        <>
        {
         loading && <p>Please wait ...loading</p>
         }
      
        </>
    </>
  )
}

export default App