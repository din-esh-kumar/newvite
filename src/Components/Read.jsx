import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Read() {
    const navigate = useNavigate()
    const [user,setUser]= useState([])
    useEffect(()=> {
        getData();
    }, []);

    async function getData(){
       const response = await axios.get('https://674852945801f515359052cb.mockapi.io/reactvite/practice');
    //    console.log(response.data); 
       setUser(response.data)
       console.log(user);  
    }
    async function deleteUser(id){
      const respdelete= await axios.delete('https://674852945801f515359052cb.mockapi.io/reactvite/practice/'+id);
      console.log(respdelete);
      getData()
    }
    function updatePage(userid){
        navigate('/update/'+userid)
    }
  return (
    <div>
        <h1>Read</h1>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>City</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                user.map( (value) => {                
                return (
                    <tr key={value.id}>
                        <td>{value.id}</td>
                        <td>{value.username}</td>
                        <td>{value.email}</td>
                        <td>{value.number}</td>
                        <td>{value.city}</td>
                        <td><button onClick={ () => deleteUser(value.id)}>Delete</button></td>
                        <td><button onClick={() => updatePage(value.id)}>Update</button></td>
                    </tr>
                );
                 })}
            </tbody> 
        </table>
    </div>
  )
}

export default Read