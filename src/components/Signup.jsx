import React, { useRef, useState } from "react"

import { Link, useNavigate } from "react-router-dom"
import { createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../firebase'
import background from '../assets/background.jpeg'

const Signup = () => {
    const [registerUsername, setRegisterUsername] = useState("")
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    
    const navigate = useNavigate()
    const [error , setError] = useState("")
    const login = async () =>{
       
        try{
        const user = await createUserWithEmailAndPassword(auth, loginEmail, loginPassword)
        console.log(user)
        navigate("/")
        }catch(error){
            setError("login failed")
            
        }
    }
  
  return (
    
        <div className="flex justify-start items-center flex-col h-screen">
    <div className=" relative w-full h-full">
    <img
      src={background}
      
       
      className="w-full h-full object-cover"
    ></img>
    
    </div>
    
      <div className="absolute bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
        <section>
            <h3 className="font-bold text-2xl text-center">Welcome to Inventory System</h3>
            <p className="text-gray-600 pt-2">Sign up to your account.</p>
            <h2 className="text-red-500 text-xl">{error}</h2>
        </section>

        <section className="mt-10">
            <div className="flex flex-col" >
                <div className="mb-6 pt-3 rounded bg-gray-200">
                    <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" for="email">Email</label>
                    <input type="text" id="email" name="email" onChange={(e)=>{setLoginEmail(e.target.value)}} required className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"></input>
                </div>
                <div className="mb-6 pt-3 rounded bg-gray-200">
                    <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" for="password">Password</label>
                    <input type="password" id="password" name="password" onChange={(e)=>{setLoginPassword(e.target.value)}} required className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"></input>
                </div>
               
                
                <button onClick={login} className="bg-slate-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit">Sign In</button>
            </div>
        </section>
        <div className="max-w-lg mx-auto text-center mt-12 mb-6">
        <p className="text-slate-600">Don't have an account? <Link to="/login" className="font-bold hover:underline">login</Link>.</p>
    </div>
    </div>

    </div>
  )
}

export default Signup
