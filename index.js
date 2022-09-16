const express = require("express");
const cors = require('cors');


const app = express();

var corOptions = {
    origin : "https://localhost:8080"
}

//middleware
app.use(cors(corOptions))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//routers


const router = require("../sequelize_demo2-develop/routes/productRouter")
app.use("/",router)

//testing api

app.get('/',(req,res)=>{
    res.json({message:"Hello from API"})
})
//port
const PORT = process.env.PORT || 8000

//server
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})


// urlencoded({extended:true} : The extended option allows to choose between parsing the URL-encoded data with the querystring library
// (when false) or the qs library (when true). The “extended” syntax allows for rich objects and arrays to be encoded into the
// URL-encoded format, allowing for a JSON-like experience with URL-encoded.

// CORS middleware: CORS allows you to configure the web APIs security. It has to do with allowing other domains to
// make requests against your web API. For example, if you had your web API on one server and your web app on another you
// could configure CORS in your Web API to allow your web app to make calls to your web API.

// use(cors(corsOptions)); If you configure the domain name in the origin - the server will allow CORS from the configured domain.
//     So the API will be accessible from http://localhost:8080 in our case and blocked for other domains.