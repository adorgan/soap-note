require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const session = require("express-session");
// const MongoDbSession = require("connect-mongodb-session")(session);
const app = express();

const therExRoutes = require("./routes/therExRoutes");
const fimRoutes = require("./routes/fimRoutes");
const noteRoutes = require("./routes/noteRoutes");
const dataRoutes = require("./routes/dataRoutes");
const adlRoutes = require("./routes/adlRoutes");
const mobilityRoutes = require("./routes/mobilityRoutes");
// const authRoutes = require("./routes/authRoutes");
const db = require("./config/keys").mongoURI;



mongoose
    .connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));


app.use(cors());
app.use(bodyParser.json());



// const store = new MongoDbSession({
//     uri: db,
//     collection: "userSessions",
// });
// app.use(
//     session({
//         secret: "secret key",
//         resave: false,
//         saveUninitialized: false,
//         store: store,
//     })
// );



app.use("/", therExRoutes);
app.use("/", fimRoutes);
app.use("/", noteRoutes);
app.use("/", dataRoutes);
app.use("/", adlRoutes);
app.use("/", mobilityRoutes);
// app.use("/", authRoutes);

//serve static assets if in production
if (process.env.NODE_ENV === "production") {
    //set static folder
    const root = path.join(__dirname, "../client", "build");
    app.use(express.static(root));
    app.get("*", (req, res) => {
        res.sendFile("index.html", { root });
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));
