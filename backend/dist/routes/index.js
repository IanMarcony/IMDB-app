"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var UserRouter_1 = __importDefault(require("./UserRouter"));
var routes = express_1.Router();
routes.use(UserRouter_1.default);
routes.get("/", function (req, res) {
    return res.status(200).send({ message: "Main Route" });
});
exports.default = routes;
