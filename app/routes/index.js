(()=>{
    'use strict';
    const multer = require('multer');

    module.exports = (app)=>{
      app.route('/')
          .get((req, res)=>{
              res.sendFile(process.cwd() + '/public/html/index.html');
          })
          .post(multer().single('file'), (req, res)=>{
              const fl = req.file,
                  resp = {
                      fileName: fl.originalname,
                      fileSize: fl.size + ' bytes'
                  };

              res.send(resp);

          });
    };
})();