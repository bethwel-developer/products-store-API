 const express = require("express")
const app = express()
const cors = require ("cors");
const mongoose = require ("mongoose")
const port = 3000;
const product = require ("./routes/productRoute")


app.use(express.json())
app.use(cors())
require("dotenv").config();

app.use("/api/", product)


//MONGOOSE CONNECT
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
  useUnifiedTopology:true,
})
.then(() => {
    console.log("DB connected")
    
}).catch((err) => {
   console.log(err.message) 
});

//PORT CONNECTION
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
