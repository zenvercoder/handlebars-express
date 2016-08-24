const express = require('express');

let app = express();

app.get('/', (req,res) => {
    "use strict";
    res.json({message: 'Hellow from express!'});
});

app.listen(3000, () => {
    console.log('server running on port 3000');
});

// our app.js file is a serverside js file, so we are running it in node