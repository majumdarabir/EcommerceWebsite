import React from 'react'
import Navbar from './Navbar'
import { useState,useEffect } from 'react'
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
export default function Home() {
  const navigate = useNavigate()
  const [data,setData] = useState([])
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      navigate("/signup");
    }

    //   // Fetching all posts
    fetch("https://ecommercewebsite-3.onrender.com/api/product/all_products", {
      headers: {
        Authorization: "Bearer" + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData(result);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Navbar />
      <div className='flex-auto flex flex-wrap justify-start'>
        {data.map((item, index) => (
          <div className="card" style={{ width: 300, margin: 10 }} key={index}>
            <img src={item.course_pic} className="card-img-top" alt="..." style={{ maxWidth: '100%', height: 300, padding: 5 }} />
            <div className="card-body">
              <h5 className="card-title"><b>{item.course_name}</b></h5>
              <p className="card-text">{item.course_desc}</p>
              <a href="#" className="btn btn-primary" style={{ marginTop: 5 }}>Go inside</a>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  )
}



