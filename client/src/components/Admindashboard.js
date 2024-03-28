import React from 'react'
import "./css/Createpost.css"
import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';


export default function Admindashboard() {
    const [coursename, setCoursename] = useState("")
    const [coursedesc, setCoursedesc] = useState("")
    const [image, setImage] = useState("")
    const [url, setUrl] = useState()
    const navigate = useNavigate()
    useEffect(() => {

        // saving post to mongodb
        if (url) {

            fetch("https://ecommercewebsite-3.onrender.com/api/product/post_product", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer" + localStorage.getItem("jwt")
                },
                body: JSON.stringify({
                    coursename: coursename,
                    coursedesc: coursedesc,
                    coursepic: url
                })
            }).then(res => res.json())
                .then(data => {
                    if (data.error) {
                        console.log("data.error")
                    } else {
                        console.log("Successfully Posted")
                        navigate("/")
                    }
                })
                .catch(err => console.log(err))
        }

    }, [url])

    const handleApi = async (e) => {
        const data = new FormData()
        data.append("file", image)
        data.append("api_key", '369424369157965');
        data.append("api_secret", 'LNZwQID1278Kgx0uTl2vk1T1-dg');
        data.append("upload_preset", "instraclone")
        data.append("cloud_name", "abirKing")

        console.log(image)
        const result = await fetch("https://api.cloudinary.com/v1_1/abirKing/image/upload", {
            method: "post",
            body: data
        }).then(res => res.json())
            .then(data => setUrl(data.url))
            .catch(err => console.log(err))

        console.log(url)

    }
    const loadfile = (event) => {
        var output = document.getElementById("output");
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = function () {
            URL.revokeObjectURL(output.src); // free memory
        };
    };

    return (
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Create event or courses</h1>
                    {/* <input
                          type="text"
                          className="block border border-grey-light w-full p-3 rounded mb-4"
                          name="username"
                          placeholder="Username" value={username} onChange={(e) => { setUsername(e.target.value) }} /> */}

                    <input
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Course name" value={coursename} onChange={(e) => setCoursename(e.target.value)} />

                    <input
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Course description" value={coursedesc} onChange={(e) => setCoursedesc(e.target.value)} />
                    <img
                        id="output"
                        src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png"
                    />
                    <input
                        type="file"
                        accept="image/*"

                        onChange={(e) => {
                            loadfile(e)
                            setImage(e.target.files[0])
                        }}
                    />

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-lime-400 text-white hover:bg-green-dark focus:outline-none my-1"
                        onClick={() => { handleApi() }}>Login Account</button>

                    {/* <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div> */}
                </div>

                {/* <div className="text-grey-dark mt-6">
                    Don't have an account?
                    <Link to="/signup">
                        <span style={{ color: "blue", cursor: "pointer" }}>Sign up</span>
                    </Link>
                </div> */}
            </div>
        </div>

    )
}
