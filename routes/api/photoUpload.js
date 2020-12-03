// require("dotenv").config();
const express = require("express");
const router = express.Router(); 
const Photo = require("../../models/Photos");
const multer = require("multer");
const AWS = require("aws-sdk");
//const passport = require("passport");

const storage = multer.memoryStorage();
const upload = multer({storage: storage});

//router.get("/test", (req, res) => res.json({ msg: "This is the docs route" }));

//index
router.get("/", (req, res) => {
  Photo.find()
    .sort({createdAt: 1})
    .then(docs => res.status(200).send(docs))
    .catch(err => res.status(404).json(err))
});

//show
router.get("/:id", (req, res) => {
    Photo.findById(req.params.id)
        .then(doc => res.json(doc))
        .catch(err => res.status(404).json(err))
});

//create - to upload
router.post("/upload", upload.single("file"), function(req, res) {
    console.log(req.body)
    const file = req.file;
    const s3FileUrl = process.env.AWS_Uploaded_File_URL_LINK;
    
    //finding bucket
    let s3Bucket = new AWS.S3({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: process.env.AWS_REGION
    });

    //uploading params
    let params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: file.originalname,
        Body: file.buffer,
        ContentType: file.mimetype,
        ACL: "public-read"     
    };

    s3Bucket.upload(params, function(err, data) {
        if (err) {
            res.status(500).json(err);
        } else {
            res.send({ data });
            let fileToUpload = {
                uploader: req.file.originalname,
                fileLink: s3FileUrl + file.originalname,
                s3_key: params.Key
        };
        let photo = new Photo(fileToUpload);

        photo.save(function(error, newFile) {
            if (error) throw error;
        });
    }
  });

    // to remove
    router.delete("/:id", (req, res) => {
        Photo.findByIdAndRemove(req.params.id, function (err, result) {

            if (err) {
                res.status(404).json(err);
            }

            //finding bucket
            let s3Bucket = new AWS.S3({
                accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                region: process.env.AWS_REGION
            });

            let params = {
                Bucket: process.env.AWS_BUCKET_NAME,
                Key: result.s3_key   
            };

            s3Bucket.deleteObject(params, (err, data) =>{
                if (err) {
                    res.status(500).json(err);
                } else {
                    res.send({ status:"200", response:"deleted Photo" });

                }
            });

        });
    });



});


module.exports = router;