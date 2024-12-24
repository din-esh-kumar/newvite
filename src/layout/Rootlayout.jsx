import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Rootlayout() {
  return (
    <div>
        <nav>
            <Link to="create">Create</Link>
            <Link to="read">Read</Link>
            <Link to="update">Update</Link>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Rootlayout