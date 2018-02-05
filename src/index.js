const express = require('express');
const path = require('path');
const cors = require('cors');

//const indexRoutes = require('./routes/index');
const escortsRoutes = require('./routes/escorts');

const app = express();

// settings
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.set('port', process.env.PORT || 3000);
app.set('json spaces', 4); // vista ordenada de json

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
//app.use('/', indexRoutes);
app.use('/api', escortsRoutes);

// static files
app.use(express.static(path.join(__dirname, 'dist')));

// start the server
app.listen(app.get('port'), () => {
    console.log('server on port 3000');
});
