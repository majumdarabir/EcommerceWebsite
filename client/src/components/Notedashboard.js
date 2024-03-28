import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'

const Notedashboard = () => {
    const [pdfs, setPdfs] = useState([]);

    useEffect(() => {
        // Fetch PDFs directly from the '/pdfs' directory
        const fetchPDFs = async () => {
            try {
                const response = await fetch('https://ecommercewebsite-3.onrender.com/api/pdf-list');
                const data = await response.json();
                setPdfs(data);
            } catch (error) {
                console.error('Error fetching PDFs:', error);
            }
        };
        fetchPDFs();
    }, []);

    return (
        <div>
            <Navbar/>
            
                <div className='flex-auto flex flex-wrap justify-start'>
                    {pdfs.map((pdf, index) => (
                        <div className="card" style={{ width: 300, margin: 10 }} key={index}>
                            <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202209/pdf_0_x.jpeg?VersionId=MKsLoyJxMtVX2LaC.UL5jq5wdVRSxg7i" className="card-img-top" alt="..." style={{ maxWidth: '100%', height: 300, padding: 5 }} />
                            <div className="card-body">
                                <h5 className="card-title"><b>{pdf}</b></h5>
                                
                                <a href={`https://ecommercewebsite-3.onrender.com/api/pdf/${pdf}`} className="btn btn-primary" style={{ marginTop: 5 }}>Go inside</a>
                            </div>
                        </div>
                    ))}
                </div>
                
               
            
               
        </div>
     );
};

export default Notedashboard;