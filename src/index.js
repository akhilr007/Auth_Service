const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");
const apiRoutes = require("./routes/index");

const prepareAndStartServer = async () => {

    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }))

    app.use("/api", apiRoutes);

    app.listen(PORT, async () => {
        console.log(`server started and running at port: ${PORT}`);
    });
}

prepareAndStartServer();