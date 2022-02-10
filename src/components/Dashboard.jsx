import React from 'react'
import Header from './Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase, faShoppingBag, faStar, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
const Dashboard = () => {
  return (
    <div>
      <Header></Header>
      <div>
        <h1 className="text-center text-2xl mt-3">DashBoard</h1>
      </div>
     <div className="mt-3 flex flex-wrap justify-center">

            <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">

                <span className="h-20 m-6"><FontAwesomeIcon className="text-indigo-300 mr-2" icon={faDatabase}/><span>100</span></span>

                <h2 className="text-center px-2 pb-5">Total Stock in</h2>  
                
                <Link to="/" className="bg-blue-500 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500">View</Link>

            </div>



            <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">

                <span className="h-20 m-6"><FontAwesomeIcon className="text-indigo-300 mr-2" icon={faShoppingBag}/><span>100</span></span>

                <h2 className="text-center px-2 pb-5">Total Stock out</h2>  
                
                 <Link to="/" className="bg-blue-500 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500">View</Link>

            </div>



            <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">

                <span className="h-20 m-6"><FontAwesomeIcon className="text-indigo-300 mr-2" icon={faTimes}/><span>100</span></span>

                <h2 className="text-center px-2 pb-5">Total Low Stock limit</h2>  
                
                 <Link to="/" className="bg-blue-500 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500">View</Link>

            </div>



            <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">

               <span className="h-20 m-6"><FontAwesomeIcon className="text-indigo-300 mr-2" icon={faStar}/><span>100</span></span>

                <h2 className="text-center px-2 pb-5">Demanding Stock</h2>  
                
                  <Link to="/" className="bg-blue-500 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500">View</Link>

            </div>

        </div>
        </div>
  )
}

export default Dashboard
