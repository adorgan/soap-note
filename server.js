require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require('path');
const cors = require('cors');
const app = express();
app.use(cors())

app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;
// const db = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.oj90x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const addFim = (total, num) =>{
    return total + num;
}
app.post("/fim", (req, res) => {
  fimScoring = {
      'independent': 7,
      'modified independent': 6,
      'supervision': 5,
      'minimum assistance': 4,
      'moderate assistance': 3,
      'maximum assistance': 2,
      'dependent': 1
  };
  nums = [];
  Object.values(req.body).forEach((val)=>{
      nums.push(fimScoring[val]);
  })
  
  res.json(nums.reduce(addFim));

});
//serve static assets if in production
if(process.env.NODE_ENV === 'production'){
  //set static folder
  app.use(express.static('client/build'));

  app.get('*', (req,res)=>{
    res.sendFile(path.resolve(__dirname, 'client','build','index.html'))
  });
}



const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));
