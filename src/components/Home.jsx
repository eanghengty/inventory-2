import React from 'react'
import fireDb from '../firebase'
import {Link} from 'react-router-dom'
import {useEffect} from 'react'
import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faEye, faTrash ,faSearch} from '@fortawesome/free-solid-svg-icons'
import {useNavigate} from 'react-router-dom'
import Header from './Header'
const Home = () => {
    const [search,setSearch]=useState("")
    const [data,setData]=useState({})
    useEffect(()=>{
        fireDb.child("item").on("value",(snapshot)=>{
            if(snapshot.val() !== null){
                setData({...snapshot.val()})
            }else{
                setData({})
            }
        })
        return()=>{
            setData({})
        }
    },[])

    const onDelete =(id)=>{
        if(window.confirm("Want to delete that item?")){
            fireDb.child(`item/${id}`).remove((e)=>{
                if(e){
                    console.log('delete failed')
                }else{
                    console.log('deleted')
                }
            })
        }
    }
    const navigate = useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        navigate(`/search?name=${search}`)
        setSearch("")
    }
  return (
      
    <div>
        <Header></Header>
        <div>
        <div className="flex justify-between py-3 px-6 bg-gray-50 border-b space-x-6">
    <form action="" className="w-full max-w-md" onSubmit={handleSubmit}>
      <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
        <FontAwesomeIcon icon={faSearch} className="w-5 h-5 absolute ml-3 pointer-events-none"></FontAwesomeIcon>
        <input
          type="text"
          name="search"
          placeholder="Search Item"
          autocomplete="off"
          onChange={(e)=>setSearch(e.target.value)}
          value={search}
          className="w-full pr-3 pl-10 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
        />
      </div>
      </form>
        </div>
        </div>
        <div className="p-5 h-screen bg-gray-100">
    <h1 className="text-xl mb-2">Items list</h1>

    <div className="overflow-auto rounded-lg shadow md:block">
      <table className="w-full">
        <thead className="bg-gray-50 border-b-2 border-gray-200">
        <tr>
        <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">Item ID</th>
          <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">Item Name</th>
          <th className="p-3 w-24 text-sm font-semibold tracking-wide text-left">Type</th>
          <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">Quantity</th>
          <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">Price $</th>
          <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">Low Item</th>
          <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">Collections</th>
          <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">Date</th>
          <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">Action</th>
        </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
            {Object.keys(data).map((id,index)=>{
                return(
                    <tr className="bg-white" key={id}>
                        <th  className="p-3 text-sm text-gray-700 whitespace-nowrap" scope="row">{index+1}</th>
                        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                        <Link to="/" className="font-bold text-blue-500 hover:underline">{data[id].itemName}</Link>
                        </td>
                         <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                            {data[id].type}
                        </td>
                        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                        <span
                        className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">{data[id].quantity}</span>
                        </td>
                         <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{data[id].price}</td>
                         <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{data[id].limitingItem}</td>
                         <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{data[id].collections}</td>
                        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{data[id].date}</td>
                        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                            <Link to={`/update/${id}`}><button className="p-2 text-xs font-medium uppercase tracking-wider text-white bg-blue-500 rounded-lg bg-opacity-50"><FontAwesomeIcon icon={faEdit}></FontAwesomeIcon> Edit</button></Link>
                            <button onClick={()=> onDelete(id)} className="ml-2 p-2 text-xs font-medium uppercase tracking-wider text-white bg-red-500 rounded-lg bg-opacity-50"><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon> Del</button>
                            <Link to={`/view/${id}`}><button className="ml-2 p-2 text-xs font-medium uppercase tracking-wider text-white bg-yellow-500 rounded-lg bg-opacity-50"><FontAwesomeIcon icon={faEye}></FontAwesomeIcon> View</button></Link>
                        </td>
                        
                    </tr>
                )
            })}

        </tbody>
      </table>
    </div>

    
  </div>
    </div>
  )
}

export default Home
