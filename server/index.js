const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const port = 5000;
app.listen(port);

app.use(express.json());
app.use(cors());

//mongoose database connection
mongoose
  .connect(
    "mongodb+srv://admin:Framestudio21@cluster.ilwonaw.mongodb.net/FRAME?retryWrites=true&w=majority"
  )
  .then(function () {
    console.log("connection: " + mongoose.connection.readyState);
  });

// mongoose insert data to database
const Image = require("./model");
app.post("/upload", async (req, res) => {
  const {
    designtype,
    name,
    height,
    width,
    thumbnail,
    text1,
    text2,
    text3,
    imagelink,
    imagelink1,
    imagelink2,
    imagelink3,
    imagelink4,
    imagelink5,
    author,
  } = req.body;
  const img = new Image({
    designtype,
    name,
    height,
    width,
    thumbnail,
    text1,
    text2,
    text3,
    imagelink,
    imagelink1,
    imagelink2,
    imagelink3,
    imagelink4,
    imagelink5,
    author,
  });
  await img
    .save()
    .then(() => res.status(200).json({ success: "success" }))
    .catch((error) => console.log(error));
});

// feedback router
const Feedback = require("./feedbackmodule");
app.post("/feedback", async (req, res) => {
  const { name, email, text } =
    req.body;
  const feedback = new Feedback({
    name,
    email,
    text,
  });
  await feedback
    .save()
    .then(() => res.status(200).json({ success: "success" }))
    .catch((error) => console.log(error));

  const nodemailer = require("nodemailer");
  const sub =
    "Thank You For Your Support."

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: "info.framestudio21@gmail.com",
      pass: "smqgzppqgcyfdomy",
    },
  });

  transporter.sendMail({
    from: '"Frame Studio" <info.framestudio21@gmail.com>',
    to: email.toLowerCase() + ", info.framestudio21@gmail.com",
    subject: sub,
    html:
      "<div>Name: <strong>" +
      name +
      "</strong><br>Your Feedback: <strong>" +
      text +
      "</div>",
  });
});


// contact module page
const Contact = require("./contactmodule");
app.post("/contact", async (req, res) => {
  const { name, email, imagereference, subject, designtype, graphicdesignfor, webdesignfor, description } =
    req.body;
  const contact = new Contact({
    name,
    email,
    imagereference,
    subject,
    designtype,
    graphicdesignfor,
    webdesignfor,
    description,
  });
  await contact
    .save()
    .then(() => res.status(200).json({ success: "success" }))
    .catch((error) => console.log(error));

  const nodemailer = require("nodemailer");
  const sub =
    (designtype + "-" + graphicdesignfor).toUpperCase() +
    " - " +
    email.toLowerCase();

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: "info.framestudio21@gmail.com",
      pass: "smqgzppqgcyfdomy",
    },
  });

  transporter.sendMail({
    from: '"Frame Studio" <info.framestudio21@gmail.com>',
    to: email.toLowerCase() + ", info.framestudio21@gmail.com",
    subject: sub,
    html:
      "<p style='text-align:center;font-size:1.3rem;'>New Request</p><br><div>Design Type: <strong>" +
      designtype +
      "</strong><br>Graphic Design For: <strong>" +
      graphicdesignfor + 
      "</strong><br>Web Design For: <strong>" +
      webdesignfor +
      "</strong><br>Description: <strong>" +
      description +
      "</div>",
  });
});

// advertisement image upload section
const Addvertisement = require("./addmodule");
app.post("/advertisement", async (req, res) => {
  const {
    designtype,
    name,
    thumbnail,
  } = req.body;
  const add = new Addvertisement({
    designtype,
    name,
    thumbnail,
  });
  await add
    .save()
    .then(() => res.status(200).json({ success: "success" }))
    .catch((error) => console.log(error));
});

app.get("/home", (req, res) => {
  Image.find({designtype: ["graphic","website"]})
    .sort({ createdAt: -1 })
    .then((data) => {
      res.json(data);
    });
});

app.get("/graphic", (req, res) => {
  Image.find({ designtype: "graphic" })
    // .pretty()
    .sort({ createdAt: -1 })
    .then((data) => {
      res.json(data);
    });
});

app.get("/website", (req, res) => {
  Image.find({ designtype: "website" })
    .sort({ createdAt: -1 })
    .then((data) => {
      res.json(data);
    });
});

app.get("/digitalart", (req, res) => {
  Image.find({ designtype: "digitalart" })
    .sort({ createdAt: -1 })
    .then((data) => {
      res.json(data);
    });
});

app.get("/photography", (req, res) => {
  Image.find({ designtype: "photography" })
    .sort({ createdAt: -1 })
    .then((data) => {
      res.json(data);
    });
});

app.get("/:path/:id", (req, res) => {
  const { id } = req.params;
  const { path } = req.params;
  Image.find({ _id: id, designtype: path }).then((data) => {
    res.send(data);
  });
});

app.get("/contact", (req, res) => {
  Contact.find()
    .sort({ createdAt: -1 })
    .then((data) => {
      res.send(data);
    });
});

app.get("/feedback", (req, res) => {
  Feedback.find()
    .sort({ createdAt: -1 })
    .then((data) => {
      res.send(data);
    });
});

app.get("/advertisement", (req, res) => {
  Addvertisement.find()
    .sort({ createdAt: -1 })
    .then((data) => {
      res.send(data);
    });
});

app.get("/feedback", (req, res) => {
  Feedback.find()
    .sort({ createdAt: -1 })
    .then((data) => {
      res.send(data);
    });
});

app.delete("/image/:id", (req, res) => {
  const { id } = req.params;
  Image.findByIdAndDelete({_id:id}).then(()=>res.send({status:'ok'}))
});
app.delete("/adv/:id", (req, res) => {
  const { id } = req.params;
  Addvertisement.findByIdAndDelete({_id:id}).then(()=>res.send({status:'ok'}))
});
module.exports = app