const express = require("express")
const fs = require('fs');
const dbConnect = require('./config/dbConfig')
const path = require('path')
const dotenv = require('dotenv')
const cors = require('cors')
const authRoute = require('./Routes/authRoute')
const productRoute = require('./Routes/productRoute')
const bodyParser = require("body-parser")
const pdfRoute = require("./Routes/pdfRoute")


const app = express()
dotenv.config()

dbConnect()



app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.get('/cors', (req, res) => {
    res.send('This has CORS enabled 🎈')
})
const pdfDir = path.join(__dirname, 'uploads', 'pdf')
app.get('/api/pdf-list', (req, res) => {
    // Read the contents of the PDF directory
    fs.readdir(pdfDir, (err, files) => {
        if (err) {
            console.error('Error reading PDF directory:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        // Filter out only PDF files
        const pdfFiles = files.filter(file => path.extname(file).toLowerCase() === '.pdf');

        res.json(pdfFiles);
    });
});
app.get('/api/pdf/:filename', (req, res) => {
    const { filename } = req.params;
    const filePath = path.join(pdfDir, filename);

    // Check if the file exists
    fs.stat(filePath, (err, stats) => {
        if (err) {
            console.error('Error getting PDF file stats:', err);
            return res.status(404).json({ error: 'PDF file not found' });
        }

        // Serve the file
        res.setHeader('Content-Length', stats.size);
        res.setHeader('Content-Type', 'application/pdf');
        fs.createReadStream(filePath).pipe(res);
    });
});

app.use('/pdfs', express.static(pdfDir))
app.use('/api/user',authRoute)
app.use('/api/product',productRoute)
app.use('/api',pdfRoute)
app.get('/',(req,res)=>{
    res.json("...")
})

app.listen(4000,(req,res)=>{
    console.log("server is running 4000");
})