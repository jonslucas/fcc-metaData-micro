(()=>{
    'use strict';
    const app = require(process.cwd() + '/app'),
          port = process.env.PORT || 3000;

    app.listen(port, ()=>{
        console.log('Listening on port '+port);
    });
})();