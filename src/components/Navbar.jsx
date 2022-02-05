import React from 'react'
import {Link} from 'react-router-dom'
import profile from '../assets/profile.jpg'
import { signOut } from 'firebase/auth'
import {auth} from'../firebase'

const Navbar = () => {
    const logout = async() =>{
      await signOut(auth)
      alert('log out')
    }
  return (
    <div>
       <nav className="bg-slate-300">
  <div className="max-w-6xl mx-auto px-4">
    <div className="flex justify-between">

      <div className="flex space-x-4">
       
        <div>
          <Link to="/" href="#" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
            
            <span className="font-bold text-2xl">Inventory</span>
          </Link>
        </div>

        
      </div>

 
      <div className=" flex items-center space-x-1">
        <Link to="/login" className="py-5 px-3">Login</Link>
        <Link to="/login" onClick={logout} className="py-5 px-3">logout</Link>
        {/* <Link to="/login" className="py-5 px-3">Dashboard</Link>
        <Link to="/login" className="py-5 px-3">item</Link>
        <Link to="/login" className="py-5 px-3">stock in/out</Link>
        <Link to="/login" className="py-5 px-3">stock history</Link> */}
        <Link to="/signup" className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300">Signup</Link>
        {/* <img src={profile} alt="" className="w-10 rounded-full h-10 object-cover ml border-2" /> */}
      </div>


     
    </div>
  </div>


  
</nav>


    </div>
  )
}

export default Navbar
