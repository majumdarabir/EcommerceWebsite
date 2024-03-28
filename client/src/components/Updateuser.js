import React, { useState } from 'react'
import { FaUnlockAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
export default function Updateuser() {
    const [email,setEmail] = useState('')
    const makeAdmin=async()=>{
        console.log(email)
        try {
            const response = await fetch('http://localhost:4000/api/user/updateuser', {
                method: "put",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer" + localStorage.getItem("jwt")
                },
                body: JSON.stringify({
                    email: email
                })
            });

            const data = await response.json();

            if (response.ok) {
                console.log("jjj")
                // setUserLogin(true);
                alert("Admin promoted!")
            } else {
                alert(data.error)
                console.log(data.error || "Failed to login");
                // Handle error state or show error message to the user
            }
        } catch (error) {
            console.error("An error occurred:", error);
            // Handle unexpected errors, show error message, or log them for debugging
        }
    }
  return (
      <div className="bg-grey-lighter min-h-screen flex flex-col background-container3">
          <div className='background-overlay'></div>
          <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
              <div className=" px-6 py-8 rounded shadow-md text-black w-full signup-form">
                  <h1 className="mb-8 text-3xl text-center  flex item-centre">
                      <i><FaUnlockAlt/></i>
                      <h3 className='ml-10' text-white>Add admin</h3>
                  </h1>
                 

                  <input
                      type="email"
                      className="block border border-grey-light w-full p-3 rounded mb-4"
                      name="email"
                      placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

                 

                  <button
                      type="submit"
                      className="w-full text-center py-3 rounded bg-gray-400 text-white hover:bg-green-dark focus:outline-none my-1 signup-btn3"
                      onClick={(e) => makeAdmin()}>Make Admin</button>

                  
              </div>
              <div className="text-grey-dark mt-6" style={{fontWeight:'bold',color:'white'}}>
                  Back to home?
                  {/* <a className="no-underline border-b border-blue text-blue" href="../login/">
                      Log in
                  </a>. */}
                  <Link to="/">
                      <span style={{ color: "black", cursor: "pointer" }}>Home</span>
                  </Link>
              </div>
              
          </div>
      </div>
  )
}
