import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Coursedashboard() {
    const [itemname, setItemname] = useState()
    const [itemdesc, setItemdesc] = useState()
    const [git, setGit] = useState()
    const [link, setLink] = useState()
    const navigate = useNavigate()
    const handleSubmit = async () => {
        fetch("https://ecommercewebsite-3.onrender.com/api/product/post_item", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer" + localStorage.getItem("jwt")
            },
            body: JSON.stringify({
                itemname: itemname,
                itemdesc: itemdesc,
                git: git,
                link: link

            })
        }).then(res => {
            console.log(res)
            if (res.ok) {
                console.log("all are fine")
                navigate('/mycourses')

            } else {
                console.log(res.error)


            }
        })
            .catch(err => console.log(err))
    }
    return (

        
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Add item or Videos</h1>
                    <input
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="username"
                        placeholder="Item name" value={itemname} onChange={(e) => { setItemname(e.target.value) }} />

                    <input
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Item desc" value={itemdesc} onChange={(e) => { setItemdesc(e.target.value) }} />

                    <input
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="gitlink" value={git} onChange={(e) => setGit(e.target.value)} />
                    <input
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Enter link" value={link} onChange={(e) => setLink(e.target.value)} />

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-lime-400 text-white hover:bg-green-dark focus:outline-none my-1"
                        onClick={(e) => { handleSubmit() }} >Add Item</button>

                </div>


            </div>
        </div>
    )
}
