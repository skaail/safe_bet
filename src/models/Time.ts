export default class Time {
    id: number
    nome: String

    private static nextId = 1

    constructor(nome: String) {
        this.id = Time.nextId++
        this.nome = nome;
    }

}