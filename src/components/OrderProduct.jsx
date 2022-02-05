import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const ProductList = () => {
  return (
   <div>
     <div>
     <div className="grid grid-cols-5 w-full mt-3 ">
      <div className=" w-full gap-6 mt-3"></div>
      <div className=" w-full gap-6 mt-3">
    <div
     
      className="flex flex-col p-4 w-full bg-gray-100 rounded-lg gap-y-3"
    >
      <div className="flex-auto items-center gap-x-3">
        <div className="p-2 bg-green-300 rounded-lg">
        
        </div>
        <span
          className="text-xs font-medium"
          
        >
          12%
        </span>
        <div
          className="p-0.5 rounded-full"
          
        >
     
      </div>
      <div className="text-3xl font-semibold text-green-300">100 </div>
      <div className="text-sm tracking-wide text-gray-500"> Stock in</div>
    </div>
  </div>
    </div>

    <div className="ml-2 w-full gap-6 mt-3">
    <div

      className="flex flex-col p-4 w-full bg-gray-100 rounded-lg gap-y-3"
    >
      <div className="flex-auto items-center gap-x-3">
        <div className="p-2 bg-yellow-300 rounded-lg">
        
        </div>
        <span
          className="text-xs font-medium"
         
        >
          12%
        </span>
        <div
          className="p-0.5 rounded-full"
          
        >
         
      </div>
      <div className="text-3xl font-semibold text-yellow-300">12 </div>
      <div className="text-sm tracking-wide text-gray-500"> Low stock</div>
    </div>
  </div>
    </div>
    <div className="ml-4 w-full gap-6 mt-3">
    <div

      className="flex flex-col p-4 w-full bg-gray-100 rounded-lg gap-y-3"
    >
      <div className="flex-auto items-center gap-x-3">
        <div className="p-2 bg-red-300 rounded-lg">
         
        </div>
        <span
          className="text-xs font-medium"
         
        >
          12%
        </span>
        <div
          className="p-0.5 rounded-full"
          
        >
       
      </div>
      <div className="text-3xl font-semibold text-red-300">12 </div>
      <div className="text-sm tracking-wide text-gray-500"> Out of Stock </div>
    </div>
  </div>
    </div>
    </div>
     </div>

    <div className="container w-1/2 mx-auto">
    <div className="flex flex-col p-6 bg-gray-200 rounded-lg gap-y-6 mt-3">
    <div className="flex justify-center items-center text-center">
      <h2 className="text-xl  font-semibold text-center text-black">Review Records</h2>
      
    </div>
    <hr className="border-gray-700" />
    <div className="flex gap-x-7">
      
      <div className="flex flex-col gap-y-4">
        <div className="flex gap-x-2 items-start">
          <div className="w-4 h-4 mt-0.5 rounded-full bg-accent-red" />
          <div>
            <div className="text-xl font-medium text-black">Check out</div>
            <div className="text-md text-green-500">200 Products</div>
          </div>
        </div>
        <div className="flex gap-x-2 items-start">
          <div className="w-4 h-4 mt-0.5 rounded-full bg-accent-orange" />
          <div>
            <div className="text-xl font-medium text-black">Low stock</div>
            <div className="text-md text-red-500">122 products</div>
          </div>
        </div>
        <div className="flex gap-x-2 items-start">
          <div className="w-4 h-4 mt-0.5 rounded-full bg-accent-blue" />
          <div>
            <div className="text-xl font-medium text-black">Demanding</div>
            <div className="text-md text-red-500">264 products</div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  
   
    
    </div>
   
  
  )
}

export default ProductList
