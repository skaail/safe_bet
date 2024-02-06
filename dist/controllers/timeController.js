"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const timeRepository_1 = __importDefault(require("../repositories/timeRepository"));
function getTime(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        const time = yield timeRepository_1.default.getTime(parseInt(id));
        if (time)
            res.json(time);
        else
            res.sendStatus(404);
    });
}
function getTimes(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const times = yield timeRepository_1.default.getTimes();
        res.json(times);
    });
}
function addTime(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const time = req.body;
        const result = yield timeRepository_1.default.addTime(time);
        if (result)
            res.status(201).json(result);
        else
            res.sendStatus(400);
    });
}
exports.default = {
    getTime,
    getTimes,
    addTime
};
