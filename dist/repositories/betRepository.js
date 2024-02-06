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
const Bet_1 = __importDefault(require("../models/Bet"));
const bets = [];
function getBet(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            return resolve(bets.find(b => b.id === id));
        });
    });
}
function getBets() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            return resolve(bets);
        });
    });
}
function addBet(bet) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            const newBet = new Bet_1.default(bet.time_1, bet.time_2);
            bets.push(newBet);
            return resolve(newBet);
        });
    });
}
exports.default = {
    getBet,
    getBets,
    addBet
};
