import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function () {
    const navigate = useNavigate()
    const logoutHandler = () => {
        console.log("logout")
        localStorage.clear()
        navigate("/signup");
    }
    return (
        <div class="bg-gray-200 py-0.0002 shadow-md">
            <div class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div class="flex lg:flex-1">
                    <a href="#" class="-m-1.5 p-1.5">
                        <span class="sr-only">Your Company</span>
                        <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                    </a>
                </div>
                <div class="hidden lg:flex lg:gap-x-12 flex-auto">
                    <a href="#" class="text-sm font-semibold leading-6 text-gray-900 relative hover:text-blue-500 hover:border-b-2 border-black transition duration-300">Features
                        {/* <span class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transition-all duration-500 ease-in-out transform origin-left scale-x-0"></span> */}
                    </a>
                    <a href="#" class="text-sm font-semibold leading-6 text-gray-900 relative hover:text-blue-500 hover:border-b-2 border-black transition duration-300">Features</a>
                    <a href="#" class="text-sm font-semibold leading-6 text-gray-900 relative hover:text-blue-500 hover:border-b-2 border-black transition duration-300">Marketplace</a>
                    <a href="#" class="text-sm font-semibold leading-6 text-gray-900 relative hover:text-blue-500 hover:border-b-2 border-black transition duration-300">Company</a>
                </div>
                <div class="py-6">
                    <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" onClick={()=>{logoutHandler()}}>Log out</a>
                </div>
            </div>
        </div>
    )
}

