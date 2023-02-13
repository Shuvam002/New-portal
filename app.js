const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyp = require('body-parser');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
app.use(express.static('public'))
app.use(cors());
app.use(bodyp.urlencoded({extended:true}));
const mrd_routes = require('./routes/mrd');
const rd_routes = require('./routes/rd');
const crd_routes = require('./routes/crd');
const fetch_routes = require('./routes/fetch');
//mongoose


//client-server
// app.get('/fetch',async (req,res)=>{
//     Data.findOne().sort('-createdAt').exec(function (err, post) { res.json("Your GID is: " + post._id) });
// })
// app.get('/mrd.html',(req,res)=>{
//     res.sendFile(main+'mrd.html');
// });
app.use('/mrd.html',mrd_routes);
app.use('/rd.html', rd_routes);
app.use('/fetch',fetch_routes);
app.use('/crd',crd_routes);


app.listen(3000);