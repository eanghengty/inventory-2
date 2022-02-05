import React from 'react';
import Background from '../assets/background.jpeg'
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom'
const AuthPage = () => {
  return <div className="flex justify-start items-center flex-col h-screen">
  <div className=" relative w-full h-full">
    <img
      src={Background}
      
       
      className="w-full h-full object-cover"
    ></img>

    <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
      <div className="p-5">
        <h1 className="text-2xl">Inventory System</h1>
      </div>

      <div className="shadow-2xl">
        
            <Link to="/login"
              type="button"
              className="bg-slate-800 flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
            
            >
              <FontAwesomeIcon className="mr-4" icon={faKey}> <span className="text-xl text-white">Sign in with google</span></FontAwesomeIcon>
            </Link>
          
         
      </div>
     
      <h1 className="text-xl text-white mt-3"></h1>
    </div>
  </div>

  </div>;
};

export default AuthPage;
