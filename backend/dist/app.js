"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const path_1 = require("path");
const router_1 = __importDefault(require("./router"));
class App {
    constructor() {
        this.app = express_1.default();
        this.middleware();
        this.router();
        this.static();
    }
    middleware() {
        this.app.use(express_1.default.json());
        this.app.use(morgan_1.default('dev'));
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use(cors_1.default({ origin: '*' }));
        this.app.use(helmet_1.default());
    }
    router() {
        this.app.use(router_1.default);
    }
    static() {
        this.app.use(express_1.default.static(path_1.resolve('./public')));
    }
}
exports.App = App;
