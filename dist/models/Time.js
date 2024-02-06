"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Time {
    constructor(nome) {
        this.id = Time.nextId++;
        this.nome = nome;
    }
}
Time.nextId = 1;
exports.default = Time;
