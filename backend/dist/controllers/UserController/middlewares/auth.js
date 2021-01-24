"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var JWT = __importStar(require("jsonwebtoken"));
var authConfig = require("../../../config/auth"); //pega o hash md5
module.exports = function (req, res, next) {
    var authHeader = req.headers.authorization;
    if (!authHeader)
        return res.status(401).send({ error: "No token provided" }).redirect("/"); //Sem Token
    //Formato padrão do JWT: Bearer (hash)
    var parts = authHeader.split(' ');
    if (!(parts.length === 2))
        return res.status(401).send({ error: "Token error" }).redirect("/"); //Não está no formato correto
    var scheme = parts[0], token = parts[1];
    if (!/^Bearer$/i.test(scheme))
        return res.status(401).send({ error: "Token malformatted" }).redirect("/"); //Não possui o 'Bearer'
    try {
        var payload = JWT.verify(token, authConfig.secret);
        req.userId = payload.id;
        return next();
    }
    catch (err) {
        return res.status(401).send({ error: "Token Invalid" }).redirect("/");
    }
};
