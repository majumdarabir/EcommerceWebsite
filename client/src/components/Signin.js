import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { FaUnlockAlt } from "react-icons/fa";
// import { useContext } from 'react';
// import { LoginContext } from "../context/LoginContext";

export default function Signin() {
    const navigate = useNavigate()
    // const { setUserLogin } = useContext(LoginContext)
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmpassword, setConfirmpassword] = useState()
    // const { setUserLogin } = useContext(LoginContext)
    const postData = async () => {
        if(!email || ! password || ! confirmpassword){
            return alert('fill all the fields')
        }
        if(password !== confirmpassword){
            return alert('password mismatched')
        }
        try {
            const response = await fetch('https://ecommercewebsite-3.onrender.com/api/user/login', {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem("jwt", data.token);
                localStorage.setItem("user", JSON.stringify(data.username));
                console.log("Login successful");
                // setUserLogin(true);
                navigate('/');
            } else {
                alert(data.error)
                console.log(data.error || "Failed to login");
                // Handle error state or show error message to the user
            }
        } catch (error) {
            console.error("An error occurred:", error);
            // Handle unexpected errors, show error message, or log them for debugging
        }
    };

    return (
        <div className="bg-grey-lighter min-h-screen flex flex-col background-container2">
            <div className='background-overlay'></div>
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className=" px-6 py-8 rounded shadow-md text-black w-full signup-form">
                    <h1 className="mb-8 text-3xl text-center  flex item-centre">
                        <i><FaUnlockAlt/></i>    
                        <h3 className='ml-10'>Login</h3>
                    </h1>
                    {/* <input
                          type="text"
                          className="block border border-grey-light w-full p-3 rounded mb-4"
                          name="username"
                          placeholder="Username" value={username} onChange={(e) => { setUsername(e.target.value) }} /> */}

                    <input
                        type="email"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

                    <input
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password" value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)} />

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-gray-400 text-white hover:bg-green-dark focus:outline-none my-1 signup-btn"
                        onClick={() => { postData() }}>Login Account</button>

                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div className="text-grey-dark mt-6">
                    Don't have an account?
                    <Link to="/signup">
                        <span style={{ color: "blue", cursor: "pointer" }}>Sign up</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
