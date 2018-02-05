//settigns
import bodyParser from 'body-parser';
import path from 'path';
import express from 'express';

module.exports = app => {

  app.set('port',process.env.PORT || 3000); //configurando el puerto
  app.set('json spaces', 4); // vista ordenada de json
  app.engine('html', require('ejs').renderFile);// renderiza archivo index
  app.set('views engine', 'ejs');// gestor plantillas
  app.set('ss', path.join(__dirname, 'ss'));

  app.use(express.static(path.join(__dirname, 'dist')));//archivos estaticos
  //Para entender las peticiones json con bodyParser de las url
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));
  module.exports = cors =>{
      app.use(cors());
  }

};
