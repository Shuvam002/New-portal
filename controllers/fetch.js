const path = require('path');
const Data = require('../db/Data');
const {coding,civil,robotics,gaming,electrical,general}=require('../db/rData');
let main = path.join(__dirname, "../");
const fetch_mrd = async (req,res)=>{
    Data.findOne().sort('-createdAt').exec(function (err, post) { res.json("Your GID is: " + post._id) });
}
const fetch_coding = async (req,res)=>{
    coding.findOne().sort('-createdAt').exec(function (err, post) { res.json("Your TID is: " + post._id) });
}
const fetch_civil = async (req,res)=>{
    civil.findOne().sort('-createdAt').exec(function (err, post) { res.json("Your TID is: " + post._id) });
}
const fetch_electrical = async (req,res)=>{
    electrical.findOne().sort('-createdAt').exec(function (err, post) { res.json("Your TID is: " + post._id) });
}
const fetch_robotics = async (req,res)=>{
    robotics.findOne().sort('-createdAt').exec(function (err, post) { res.json("Your TID is: " + post._id) });
}
const fetch_gaming = async (req,res)=>{
    gaming.findOne().sort('-createdAt').exec(function (err, post) { res.json("Your TID is: " + post._id) });
}
const fetch_general = async (req,res)=>{
    general.findOne().sort('-createdAt').exec(function (err, post) { res.json("Your TID is: " + post._id) });
}
module.exports = {fetch_coding,fetch_mrd,fetch_civil,fetch_electrical,fetch_gaming,fetch_robotics,fetch_general};