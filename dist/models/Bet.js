"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bet {
    constructor(time_1, time_2) {
        this.id = Bet.nextId++;
        this.time_1 = time_1;
        this.time_2 = time_2;
        this.aberto = true;
    }
}
Bet.nextId = 1;
exports.default = Bet;
