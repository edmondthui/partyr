const path = require('path');
const mongoose = require('mongoose');
const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const bodyParser = require('body-parser');
const passport = require('passport');
const users = require("./routes/api/users");
const parties = require("./routes/api/parties");
const http = require('http').Server(app);
const io = require('socket.io')(http, {
  cors: {
    origin: '*',
  }
});
const Message = require('./models/Message');

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello World"));
  
io.on('connection', function(socket){ 
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('User Disconnected');
  });
  
socket.on('example_message', function(msg){
    console.log('message: ' + msg);
  });
});

app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/parties", parties);


const port = process.env.PORT || 5000;

// app.listen(port, () => console.log(`Server is running on port ${port}`));

http.listen(port, () => {
  console.log('listening on:' + port)
})