const fetch = require('node-fetch')
const express = require('express');
const router = express.Router();
const CryptoJsHMA = require('crypto-js/hmac-md5')
const CryptoEncBase64 = require('crypto-js/enc-base64')

apiUrl = 'https://sandbox-authservice.priaid.ch/login'


  router.post(apiUrl, (req, res) => {
    const api_key = "mikelmessi.om@gmail.com"
    const secret_key = "i8QPt49Kad2GEf36W"
    const computedHash = CryptoJsHMA(apiUrl, secret_key);
    const computedHashString = computedHash.toString(CryptoEncBase64) 
     
    fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
      res.send({data});
    })
    .catch(err => {
      console.log(err)
    })
  })


module.exports= router;

// axios({
//     "method":"GET",
//     "url":"https://priaid-symptom-checker-v1.p.rapidapi.com/diagnosis",
//     "headers":{
//     "content-type":"application/octet-stream",
//     "x-rapidapi-host":"priaid-symptom-checker-v1.p.rapidapi.com",
//     "x-rapidapi-key":"6290a4e377msh0f36ac86ea0ed07p1409dfjsnd3a7f974ecff",
//     "useQueryString":true
//     },"params":{
//     "symptoms":"%5B234%2C11%5D",
//     "gender":"male",
//     "year_of_birth":"1984",
//     "language":"en-gb"
//     }
//     })
//     .then((response)=>{
//       console.log(response)
//     })
//     .catch((error)=>{
//       console.log(error)
//     })




