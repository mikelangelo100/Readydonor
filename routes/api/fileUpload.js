// 'use strict'
require("dotenv").config();
const express = require("express");
const router = express.Router();
const fs = require('fs');
const multer = require("multer");
const AWS = require("aws-sdk");


const ProfileImage = require('../../models/ProfileImg');
// Multer ships with storage engines DiskStorage and MemoryStorage
// And Multer adds a body object and a file or files object to the request object. The body object contains the values of the text fields of the form, the file or files object contains the files uploaded via the form.
const storage = multer.memoryStorage();
//const upload = multer({ dest: 'upload/'});
const upload = multer({ storage: storage});
  


// Get all Documents  Routes
router.route("/").get((req, res, next) => {
  ProfileImage.find(
    {},
    null,
    {
      sort: { createdAt: 1 }
    },
    (err, docs) => {
      if (err) {
        return next(err);
      }
      res.status(200).send(docs);
    }
  );
});
/*
// Route to get a single existing GO data (needed for the Edit functionality)
router.route("/:id").get((req, res, next) => {
  DOCUMENT.findById(req.params.id, (err, go) => {
    if (err) {
      return next(err);
    }
    res.json(go);
  });
});
*/

const type = upload.single('file');
router.post("/upload", type,  function(req, res) {
  const file = req.file;
  const s3FileURL = process.env.AWS_Uploaded_File_URL_LINK;
  console.log(file)
 // var tmp_path = req.file;
  console.log(req.file)

  /** The original name of the uploaded file
      stored in the variable "originalname". **/
  //var target_path = 'upload/' + req.file.originalname;

  /** A better way to copy the uploaded file. **/
  //var src = fs.createReadStream(tmp_path);
 // var dest = fs.createWriteStream(target_path);
  //src.pipe(dest);
  // fs.unlink(tmp_path); //deleting the tmp_path
  //src.on('end', function() {  res.send('complete'); });
  //src.on('error', function(err) { res.send('error'); });

  let s3bucket = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
  });

  console.log(process.env.AWS_ACCESS_KEY_ID);
  console.log(process.env.AWS_SECRET_ACCESS_KEY);

  const fileFilter =(req, file,cb) => {
    if (file.mimetype === 'images/jpeg' || file.mimetype === 'image/png') {
      cb(null, true)
    } else {
      cb(new Error(' Invalid Mime Type, only JPG and PDF'), false)
    }
  }

  //Where you want to store your file

  const params = {
    fileFilter, 
    Bucket: process.env.AWS_BUCKET_NAME,
    Body: file.buffer,  
    ContentType: file.mimetype,
    ACL: "public-read",
    key: function(req,file, cb) {
      cb(null, Date.now().toString())
    }
  };

  s3bucket.upload(params, function(err, data) {
    if (err) {
   
      res.status(500).json({ error: true, Message: err });
      console.log(err)
    } else {
      res.send({ data });
      const newFileUploaded = {
        description: req.body.description,
        fileLink: s3FileURL + file.originalname,
        s3_key: params.Key
      };
      const document = new ProfileImage (newFileUploaded);
      document.save(function(error, newFile) {
        if (error) {
          throw error;
        }
      });
    }
  });
});

// s3bucket.upload(params, function(err, data) {
//   if (err) {
//     res.status(500).json({ error: true, Message: err });
//   } else {
//     var urlParams = {
//       Bucket: process.env.AWS_BUCKET_NAME,
//       Key: file.originalname
//     };
//     s3bucket.getSignedUrl("getObject", urlParams, function(err, url) {
//       // fileURL = url;
//       console.log(fileURL);
//       res.send({ data });
//     });
//     console.log(fileURL);
//     var newFileUploaded = {
//       description: req.body.description,
//       fileLink: fileURL
//     };
//     var document = new DOCUMENT(newFileUploaded);
//     document.save(function(error, newFile) {
//       if (error) {
//         throw error;
//       }
//     });
//   }
// });
// }); 
// Route to edit existing record's description field
// Here, I am updating only the description in this mongo record. Hence using the "$set" parameter
router.route("/edit/:id").put((req, res, next) => {
  ProfileImage.findByIdAndUpdate(
    req.params.id,
    { $set: { description: Object.keys(req.body)[0] } },
    { new: true },
    (err, updateDoc) => {
      if (err) {
        return next(err);
      }
      res.status(200).send(updateDoc);
    }
  );
});

// Router to delete a DOCUMENT file
router.route("/:id").delete((req, res, next) => {
  ProfileImage.findByIdAndRemove(req.params.id, (err, result) => {
    if (err) {
      return next(err);
    }
    //Now Delete the file from AWS-S3
    // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#deleteObject-property
    let s3bucket = new AWS.S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_REGION
    });

    let params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: result.s3_key
    };

    s3bucket.deleteObject(params, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.send({
          status: "200",
          responseType: "string",
          response: "success"
        });
      }
    });
  });
});

module.exports = router;

