import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaLock } from "react-icons/fa";
export default function Signup() {
    const navigate = useNavigate()
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmpassword] = useState("")

    const postData = () => {
        if (!username|| !email|| !password|| !confirmpassword) {
            return alert('please fill all the fields')
        }
        if (password !== confirmpassword) {
            return alert('password mismatched')
        }
        // Sending data to server
        console.log("hi abir")
        fetch("https://ecommercewebsite-3.onrender.com/api/user/register", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password

            })
        }).then((res)=>{
            if(res.ok){
                navigate('/signin')
            }else{
                res.json().then((data) => {
                    console.log('error:', data.error);
                    alert(data.error);
                }).catch((error) => {
                    console.log('Error parsing JSON:', error);
                    alert('An error occurred.');
                });
            }
        })
    }

    return (
        <div className="bg-grey-lighter min-h-screen flex flex-col background-container">
            <div className='background-overlay'></div>
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className=" px-6 py-8 rounded shadow-md text-black w-full signup-form">
                    <h1 className="mb-8 text-3xl text-center flex item-centre">
                        <i><FaLock /></i>
                        <h3  className='ml-10'>Sign up</h3>
                    </h1>
                    <input
                        style={{ fontWeight: 'bold', color: 'black' }}
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="username"
                        placeholder="Username" value={username} onChange={(e) => { setUsername(e.target.value) }} />

                    <input
                        type="email"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" style={{ fontWeight: 'bold', color: 'black' }} value={email} onChange={(e) => { setEmail(e.target.value) }} />

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
                        className="w-full text-center py-3 rounded bg-gray-400 text-white hover:bg-gray-dark focus:outline-none my-1 signup-btn"
                        onClick={() => { postData() }}>Create Account</button>

                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the
                        <p className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </p> and
                        <p className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </p>
                    </div>
                </div>

                <div className="text-grey-dark mt-6">
                    Already have an account?
                    {/* <a className="no-underline border-b border-blue text-blue" href="../login/">
                      Log in
                  </a>. */}
                    <Link to="/signin">
                        <span style={{ color: "blue", cursor: "pointer" }}>Sign In</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
