require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
const request = require('request');

const app = express();
mongoose.Promise = global.Promise;

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');
const fileRoutes = require('./routes/api/fileUpload');
const donation = require('./routes/api/donation');
const bloodGroup = require('./routes/api/bloodgroup');
const username = require('./routes/api/profile')


app.use((req, res, next) =>{
  res.set("Access-Control-Allow-Origin", "*");
  
  next();
});

app.get('/api/document/upload', (req, res) => {
  request(
    {
      url: 'http://localhost:3000/file-upload'
    }, (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({type : 'error', message: error.message});
      }
      res.json(JSON.parse(body));
  
    }
  )
});





app.use(express.static(__dirname + '/public')); 
// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(fileUpload())






// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true }) // Let us remove that nasty deprecation warrning :)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config    
require('./config/passport')(passport);



// Use Routes
app.use('/api/users', users);
app.use('/api/document', fileRoutes);
app.use('/api/profile', profile);
app.use('/api/posts', posts);
app.use('/api/donation', donation);
app.use('/api/bloodGroup', bloodGroup);
app.use('/api/profile/username', username)

//app.use('/api/profile/image-upload', fileRoutes)



// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));