const express = require("express");
const app = express();
const multer = require("multer");
const bodyParser = require("body-parser");
const cors = require("cors");


const upload = multer({ dest: "uploads/" });


const port = 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});


app.post("/api/fileanalyse", upload.single('upfile'), function (req, res) {
    const file = req.file
    console.log(file["originalname"]);
   res.json({ name: file["originalname"],type : file["mimetype"], size : file["size"] });
   res.redirect("/");
})



app.listen(port, () => {
    console.log(`listening on port ${port}`);
})