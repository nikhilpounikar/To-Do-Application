const express = require('express');
const app = express();

const cookieParser = require("cookie-parser");

const db = require("./config/mongoose");

const session = require("express-session");
//get mongostore config
const MongoStore = require("connect-mongo")(session);


//mongo store is being used to store session cookie in db
app.use(
  session({
    name: "Major Project",
    // TODO change the secret before deployment in production mode
    secret: env.session_cookie_key,
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 100,
    },

    store: new MongoStore(
      {
        mongooseConnection: db,
        autoRemove: "disable",
      },
      function (err) {
        console.log(err || "connect-mongodb setup ok");
      }
    ),
  })
);

app.use(cookieParser());
app.use(express.urlencoded({extended:false}));

// Set up your routes and middleware here
// let middleware handle initial routing
app.use("/", require("./routes/index"));


// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


