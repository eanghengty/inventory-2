import React from 'react'
import fireDb from "../firebase"
import {useNavigate, useParams,Link} from "react-router-dom"
import { useEffect } from 'react/cjs/react.development'
import {useState} from 'react'
import Header from './Header'
const View = () => {
  const [item, setItem]=useState({})
  const {id} =useParams()
  useEffect(()=>{
    fireDb.child(`item/${id}`).get().then((snapshot)=>{
      if(snapshot.exists()){
        setItem({...snapshot.val()})
      }else{
        setItem({})
      }
    })
  },[id])

  console.log(item)
  return (
    <div>
      <Header></Header>
   <div className=" mt-5 container-lg w-full ">
      <div class="mx-auto bg-white w-64 shadow rounded hover:shadow-lg transition duration-200 transform hover:-translate-y-2 overflow-hidden">
    <h1 className="text-center font-bold">Item detail</h1>
    <div class="w-full flex flex-col">
      <h3 class="font-bold text-gray-700 w-full text-center mt-1 cursor-default text-lg">
        <span>Item:{item.itemName}</span>
      </h3>
      <p className="border-2 border-indigo-300 text-center">image</p>
      <p class="mt-2 p-3 pt-1 cursor-default ">
        Type:{item.type}
      </p>
      <p class="p-3 pt-1 cursor-default">
        Price:{item.price}
      </p>
      <p class="p-3 pt-1 cursor-default">
        Price:{item.collections}
      </p>
      <p class="p-3 pt-1 cursor-default">
        Price:{item.quantity}
      </p>
      <Link to="/" class="text-center bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 m-2 focus:outline-none rounded">
        Back
      </Link>
    </div>
  </div>
  <div>
    <h2 className="mt-3 font-bold text-center">Related Item</h2>
  </div>
   </div>
   </div>
  )
}

export default View
