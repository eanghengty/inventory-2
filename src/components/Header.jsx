import React from 'react'
import {Link} from 'react-router-dom'
import { signOut} from 'firebase/auth'
import {auth} from'../firebase'
import Background from '../assets/background.jpeg'
const Header = () => {
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
      <div className=" flex gap-2 items-center space-x-1">
        
        <Link to="/" className="py-5 px-3 hover:underline">DashBoard</Link>
        <Link to="/list" className="py-5 px-3  hover:underline">Item</Link>
        <Link to="/add" className="py-5 px-3  hover:underline">Stock in</Link>
        <Link to="/remove" className="py-5 px-3  hover:underline">Stock out</Link>
        <Link to="/history" className="py-5 px-3  hover:underline">History</Link>
        <Link to="/profile" >
          <img src={Background} alt="" className="w-10 h-10 rounded-full border-2 border-white" />
        </Link>
        {/* <Link to="/login" className="py-5 px-3">stock history</Link>  */}
        <Link to="/login" className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300">Logout</Link>
        
        {/* <img src={profile} alt="" className="w-10 rounded-full h-10 object-cover ml border-2" /> */}
      </div>     
    </div>
  </div>
</nav>

    </div>
  )
}

export default Header
