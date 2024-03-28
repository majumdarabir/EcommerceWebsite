// import React from 'react'
// import { useNavigate } from 'react-router-dom'

// const Navbar=()=> {
//     const navigate = useNavigate()
//     const logoutHandler = () => {
//         console.log("logout")
//         localStorage.clear()
//         navigate("/signup");
//     }
//     return (
//         <div class="bg-gray-200 py-0.0002 shadow-md">
//             <div class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
//                 <div class="flex lg:flex-1">
//                     <p href="#" class="-m-1.5 p-1.5">
//                         <span class="sr-only">Your Company</span>
//                         <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
//                     </p>
//                 </div>
//                 <div class="hidden lg:flex lg:gap-x-12 flex-auto">
//                     <a href="/" class="text-sm font-semibold leading-6 text-gray-900 relative hover:text-blue-500 hover:border-b-2 border-black transition duration-300">Books
//                         {/* <span class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transition-all duration-500 ease-in-out transform origin-left scale-x-0"></span> */}
//                     </a>
//                     <a href="/mycourses" class="text-sm font-semibold leading-6 text-gray-900 relative hover:text-blue-500 hover:border-b-2 border-black transition duration-300">My Courses
//                         {/* <span class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transition-all duration-500 ease-in-out transform origin-left scale-x-0"></span> */}
//                     </a>
//                     <a href="/notes" class="text-sm font-semibold leading-6 text-gray-900 relative hover:text-blue-500 hover:border-b-2 border-black transition duration-300">Notes</a>
//                     <a href="/contact" class="text-sm font-semibold leading-6 text-gray-900 relative hover:text-blue-500 hover:border-b-2 border-black transition duration-300">Contact me</a>
//                     <a href="/about" class="text-sm font-semibold leading-6 text-gray-900 relative hover:text-blue-500 hover:border-b-2 border-black transition duration-300">About Me</a>
//                     <a href="/dashboardpanel" class="text-sm font-semibold leading-6 text-gray-900 relative hover:text-blue-500 hover:border-b-2 border-black transition duration-300">Add items</a>
//                 </div>
//                 <div class="py-6">
//                     <p href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" onClick={()=>{logoutHandler()}}>Log out</p>
//                 </div>
                
//             </div>
//         </div>
//     )
// }

// export default Navbar
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const logoutHandler = () => {
        console.log("logout");
        localStorage.clear();
        navigate("/signup");
    };

    return (
        <div className="bg-gray-200 shadow-md ">
            <div className="mx-auto flex items-center justify-between p-4 lg:px-8" aria-label="Global">
                <div className="flex items-center">
                    <p href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img style={{zIndex:-4}} className="h-20 w-auto" src="data:image/png;base64,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" alt="" />
                    </p>
                </div>
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="block text-gray-900 hover:text-blue-500 focus:text-blue-500 focus:outline-none">
                        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                            <path fillRule="evenodd" clipRule="evenodd" d="M4 6h16v1H4V6zm0 5h16v1H4v-1zm0 5h16v1H4v-1z" />
                        </svg>
                    </button>
                </div>
                <div className={`${isOpen ? 'flex flex-col items-center' : 'hidden'} lg:flex lg:gap-x-12 flex-auto mt-4 lg:mt-0 ml-10`}>
                    <a href="/" className="text-sm font-semibold leading-6 text-gray-900 relative hover:text-blue-500 hover:border-b-2 border-black transition duration-300">Books</a>
                    <a href="/mycourses" className="text-sm font-semibold leading-6 text-gray-900 relative hover:text-blue-500 hover:border-b-2 border-black transition duration-300">My Courses</a>
                    <a href="/notes" className="text-sm font-semibold leading-6 text-gray-900 relative hover:text-blue-500 hover:border-b-2 border-black transition duration-300">Notes</a>
                    <a href="/contact" className="text-sm font-semibold leading-6 text-gray-900 relative hover:text-blue-500 hover:border-b-2 border-black transition duration-300">Contact me</a>
                    <a href="/about" className="text-sm font-semibold leading-6 text-gray-900 relative hover:text-blue-500 hover:border-b-2 border-black transition duration-300">About Me</a>
                    <a href="/dashboardpanel" className="text-sm font-semibold leading-6 text-gray-900 relative hover:text-blue-500 hover:border-b-2 border-black transition duration-300">Add items</a>
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900 relative hover:text-blue-500 hover:border-b-2 border-black transition duration-300" onClick={logoutHandler}>Log out</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;






