const express = require('express');
const { PORT } = require('./config');
const expressApp = require('./app.js');

const StartServer = async() => {

    const app = express();

    await expressApp(app);

    app.listen(PORT, () => {
        console.log(`listening to port ${PORT}`);
    })
    .on('error', (err) => {
        console.log(err);
        process.exit();
    })
}

StartServer();
module.exports = {
    StartServer
};