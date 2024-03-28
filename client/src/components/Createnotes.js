import React from 'react';
import { useState } from 'react';
const Createnotes =()=>{
    const [file,setFile] = useState([])
    const [url,setUrl] = useState()
    const handleApi = async (e) => {
        const data = new FormData()
       
        data.append("file", file)
        data.append("api_key", '369424369157965');
        data.append("api_secret", 'LNZwQID1278Kgx0uTl2vk1T1-dg');
        data.append("upload_preset", "instraclone")
        data.append("cloud_name", "abirKing")

        console.log(file)
        const result = await fetch("https://api.cloudinary.com/v1_1/abirKing/image/upload", {
            method: "post",
            body: data
        }).then(res => res.json())
            .then(data => setUrl(data.url))
            .catch(err => console.log(err))

        console.log(url)

    }
    const handleFileChange = (event) => {
        setFile(event.target.files[0])
        console.log(file); // You can perform further actions with the selected file
    };

    return (
        <div>
            <input
                type="file"
                accept=".doc, .docx, .ppt, .pptx"
                onChange={handleFileChange}
            />
            <button type='submit'onClick={()=>{handleApi()}}>click me
            
            </button>
        </div>
    );
}

export default Createnotes;
