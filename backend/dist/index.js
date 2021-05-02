"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const app_1 = require("./app");
require('./database');
const server = new app_1.App();
const port = process.env.PORT || 3000;
const main = async () => {
    await server.app.listen(port);
    console.log('server om port 3000');
};
main();
