import React from 'react'
import Create from './Components/Create' 
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Read from './Components/Read'
import Rootlayout from './layout/Rootlayout'
import Update from './Components/Update'

const router= createBrowserRouter(
    createRoutesFromElements(
      <Route path='/newvite' element={<Rootlayout/>}>
        <Route path='create' element={<Create/>}/>
        <Route path='read' element={<Read/>}/>
        <Route path='update/:id' element={<Update/>}/>
      </Route>
    )
  )
function App() {
  
  // function sendData()
  //   // console.log(username,email,phone,city);
  // }
  // function getval(event) {
  //   setusername(event.target.value)
  //   setuseremail(event.target.value)
  //   setuserphone(event.target.value)
  //   setusercity(event.target.value)
  // }
  // function getvalue(e) {
  // }
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App