import React from 'react'
import {useNavigate, userParams} from 'react-router-dom'
import fireDb from '../firebase'
import {useState,useEffect} from 'react'
import 'react-toastify/dist/ReactToastify.css'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import { toast } from 'react-toastify'
import Header from './Header'
const initialState={
    itemName:"",
    type: "",
    quantity:0,
    price:0,
    limitingItem:0,
    collections:"",
    date:""
    
}
const AddRemove = () => {
    const navigate = useNavigate()
    const [state, setState]= useState(initialState)
    const [data, setData]= useState({})
    const [error , setError] = useState('')
    const {itemName,type,quantity,price,limitingItem,collections,date}=state
    const handleInputChange=(e)=>{
            const{name,value}=e.target
            setState({...state,[name]:value})
    }
   
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(!itemName || !type || !quantity || !price || !limitingItem || !collections || !date){
            console.log("missing information")
        }else{
            if(!id){
                fireDb.child("item").push(state, (e)=>{if(e){
                    console.log(e)
                }else{
                    console.log('item added')
                    
                }
            setTimeout(()=>navigate('/'),500)
            })
            }else{
                fireDb.child(`item/${id}`).set(state)
                setTimeout(()=>navigate('/'),500)
            }
         
        }
    }
    
    const {id} = useParams()

   

  return (
      <div>
          <Header></Header>
      
    <div className="mt-3 h-screen p-3 shadow rounded-lg">
        
      <form className="container mx-auto bg-gray-100 max-w-lg p-3 h-2/3 rounded-lg " onSubmit={handleSubmit}>
          <h2 className="text-black text-xl font-semibold text-center ">Stock out</h2>
          <hr className="bg-black h-1"></hr>
         <div className="mt-7">
         <label htmlFor="name" className="text-xl">Item Name</label>
          <input required className="rounded-lg float-right p-3 text-center outline-blue-400 text-black " type="text" id="itemName" name="itemName" placeHolder="Item Name" value={itemName || ""} onChange={handleInputChange}></input>
         </div>
         <div className="mt-7">
         <label className="text-xl" htmlFor="type">Item Type</label>
          <input required className="rounded-lg float-right p-3 text-center outline-blue-400 text-black " type="text" id="type" name="type" placeHolder="Item type" value={type || ""}  onChange={handleInputChange}></input>
         </div>
         <div className="mt-7">
         <label className="text-xl" htmlFor="quantity">Item Quantity</label>
          <input required className="rounded-lg float-right p-3 text-center outline-blue-400 text-black " type="number" id="quantity" name="quantity" placeHolder="Item Quantity" value={quantity || ""} onChange={handleInputChange}></input> 
         </div>
          <div className="mt-7">
          <label className="text-xl" htmlFor="price">Item Price</label>
          <input required className="rounded-lg float-right p-3 text-center outline-blue-400 text-black " type="number" id="price" name="price" placeHolder="Item Price" value={price || ""} onChange={handleInputChange}></input>
          </div>
          <div className="mt-7">
          <label className="text-xl" htmlFor="collections">Date</label>
          <input required className="rounded-lg float-right p-3 text-center outline-blue-400 text-black " type="date" id="collections" name="date" placeHolder="Item Date dd/mm/yy" value={date || ""} onChange={handleInputChange}></input>
          </div>
          
          
          <button type="submit" value="save" className="py-2 px-3 bg-slate-400 text-white w-full mt-7 hover:bg-slate-700 rounded-lg">Check out</button>
      </form>
    </div>
    </div>
  )
}

export default AddRemove
