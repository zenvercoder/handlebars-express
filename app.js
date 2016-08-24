const express = require('express');

let app = express();

app.get('/', (req,res) => {
    "use strict";
    res.json({message: 'Hellow from express!'});
});

// add a second route that sends out another message
app.get('/page2', (req, res) => {
    "use strict";
    res.json({message: 'I am page2!'});
});

//every time you make a change, you have to restart the server
// npm package called nodemon.. command: nodemon app.js
app.listen(3000, () => {
    console.log('server running again on port 3000');
});

// our app.js file is a serverside js file, so we are running it in node
// https://expressjs.com/en/starter/hello-world.html