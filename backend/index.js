const express = require('express');
const connectToMongo = require('./db');
const bodyParser = require('body-parser');
const cors = require('cors');

connectToMongo();

const app = express();
const PORT = 8000;

// example
// app.use("/",(req,res)=>{
//     // res.send("hello world");
//     res.json({msg:"hello world",description:"Example of CRUD operation..."});
// });

app.use(cors());
app.use(express.json());
app.use('/api',require('./routes/userRotes'))


app.listen(PORT, () => {
    console.log(`Backend run using http://localhost:${PORT}`);
});