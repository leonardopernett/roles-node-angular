"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const User_1 = require("./entity/User");
typeorm_1.createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "roles",
    entities: [User_1.User],
    synchronize: true,
}).then((db) => console.log('db isconnected'))
    .catch((error) => console.log(error));
