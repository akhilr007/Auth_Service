const express = require("express");

const { PORT } = require("./config/serverConfig");

const prepareAndStartServer = async () => {

    const app = express();

    app.listen(PORT, async () => {
        console.log(`server started and running at port: ${PORT}`);
    });
}

prepareAndStartServer();