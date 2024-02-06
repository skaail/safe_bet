"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const TimesRouter_1 = __importDefault(require("./router/TimesRouter"));
const BetRouter_1 = __importDefault(require("./router/BetRouter"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/times/', TimesRouter_1.default);
app.use('/bets/', BetRouter_1.default);
app.use((req, res, next) => {
    res.send("Olá Mundo!");
});
app.use((error, req, res, next) => {
    res.status(500).send(error.message);
});
exports.default = app;
