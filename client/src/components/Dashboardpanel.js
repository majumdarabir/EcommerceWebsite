import React, { useEffect } from 'react'
import { useState } from 'react'
import { FaMessage } from "react-icons/fa6";
import { FaLaptop } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import { BsFillEmojiSmileFill, BsFillInfoSquareFill, BsInfoSquare } from "react-icons/bs";
import Navbar from './Navbar';
export default function Dashboardpanel() {
    const [admin, setAdmin] = useState(false)
    useEffect(() => {
        fetch("http://localhost:4000/api/user/isAdmin", {
            method: "get",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer" + localStorage.getItem("jwt")
            },
        })
            .then(res => {
                if (res.ok) {
                    setAdmin(true)

                } else {
                    console.log(res.error)


                }
            })
            .catch(err => console.log(err))
        console.log(admin)
    }, [])
    return (
        <div>
            {admin ? (
                <div>
                    <Navbar />
                    <div class="h-screen bg-gradient-to-b  justify-center items-center">
                        <div class=" bg-white rounded-lg" style={{ marginTop: 2 }}>
                            <div class="w-96  border-green-600 rounded-lg flex">
                                <div class="w-1/3 pt-6 flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 bg-pink-600 text-white p-3 rounded-full" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                                        <path xmlns="http://www.w3.org/2000/svg" d="M12 4.52765C9.64418 2.41689 6.02125 2.49347 3.75736 4.75736C1.41421 7.1005 1.41421 10.8995 3.75736 13.2426L10.5858 20.0711C11.3668 20.8521 12.6332 20.8521 13.4142 20.0711L20.2426 13.2426C22.5858 10.8995 22.5858 7.1005 20.2426 4.75736C17.9787 2.49347 14.3558 2.41689 12 4.52765ZM10.8284 6.17157L11.2929 6.63604C11.6834 7.02656 12.3166 7.02656 12.7071 6.63604L13.1716 6.17157C14.7337 4.60948 17.2663 4.60948 18.8284 6.17157C20.3905 7.73367 20.3905 10.2663 18.8284 11.8284L12 18.6569L5.17157 11.8284C3.60948 10.2663 3.60948 7.73367 5.17157 6.17157C6.73367 4.60948 9.26633 4.60948 10.8284 6.17157Z" fill="currentcolor"></path>
                                    </svg>
                                </div>
                                <div class="w-full pt-9 pr-4">
                                    <h3 class="font-bold text-green-700">Add item or book?</h3>
                                    <p class="py-4 text-sm text-gray-400">Are you sure you want to delete all feelings? If you delete your feelings, you will permantly loose everything.</p>
                                </div>
                            </div>

                            <div class="p-4 flex space-x-6">
                                <a href="/coursedashboard" class="w-1/2 px-4 py-3 text-center bg-gray-400 text-green-100 hover:bg-gray-500 hover:text-white font-bold rounded-lg text-sm">Add item</a>
                                <a href="/dashboard" class="w-1/2 px-4 py-3 text-center text-green-100 bg-green-600 rounded-lg hover:bg-green-700 hover:text-white font-bold text-sm">Add book</a>
                                <a href="/uploadpdf" class="w-1/2 px-4 py-3 text-center text-green-100 bg-blue-600 rounded-lg hover:bg-blue-700 hover:text-white font-bold text-sm">Add Note</a>
                                <a href="/updateuser" class="w-1/2 px-4 py-3 text-center text-green-100 bg-yellow-600 rounded-lg hover:bg-yellow-700 hover:text-white font-bold text-sm">Promote Admin</a>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <section class="bg-white dark:bg-gray-900">
                        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                            <div class="mx-auto max-w-screen-sm text-center">
                                <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">404</h1>
                                <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Something's missing.</p>
                                <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-1000">Sorry,You are not an admin,to become admin make the following steps  </p>
                                <a href="/" class="inline-flex text-grey bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">Back to Homepage</a>
                            </div>
                            <ul class="list-group">
                                <li className="list-group-item flex items-center">
                                    <i class="text-green-500 fas fa-comment mr-2"><FaMessage color='green' /></i>
                                    <span>Contact To the Owner of the website</span>
                                </li>
                                <li className="list-group-item flex items-center">
                                    <i class="text-green-500 fas fa-comment mr-2"><FaLaptop color='red' /></i>
                                    <span>A short interview is conducted</span>
                                </li>
                                <li className="list-group-item flex items-center">
                                    <i class="text-green-500 fas fa-comment mr-2"><IoBookOutline /></i>
                                    <span>A Submit you details</span>
                                </li>
                                <li className="list-group-item flex items-center">
                                    <i class="text-green-500 fas fa-comment mr-2"><BsFillEmojiSmileFill /></i>
                                    <span>If you are shortlisted you will hierd</span>
                                </li>
                                <li className="list-group-item flex items-center">
                                    <i class="text-green-500 fas fa-comment mr-2"><BsFillInfoSquareFill /></i>
                                    <span>If you are shortlisted you will hierd</span>
                                </li>


                            </ul>
                        </div>
                    </section>
                </div>
            )}
        </div>
    )
}
