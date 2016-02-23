(()=>{
    'use strict';
    const express = require('express'),
           routes = require('./routes'),
           multer = require('multer'),
              app = express();

    routes(app);
    //app.use(multer({dest: './uploads/'}));

    app.use('/public', express.static(process.cwd() + '/public'));

    module.exports = app;
})();