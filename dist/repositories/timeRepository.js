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
const Time_1 = __importDefault(require("../models/Time"));
const times = [];
function getTime(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            return resolve(times.find(t => t.id === id));
        });
    });
}
function getTimes() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            return resolve(times);
        });
    });
}
function addTime(time) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            if (!time.nome)
                return reject(new Error(`Time inválido`));
            if (times.find(t => t.nome === time.nome))
                return reject(new Error(`Time já existente`));
            const novoTime = new Time_1.default(time.nome);
            times.push(novoTime);
            return resolve(novoTime);
        });
    });
}
exports.default = {
    getTime,
    getTimes,
    addTime
};
