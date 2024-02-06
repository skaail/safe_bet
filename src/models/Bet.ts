import Time from "./Time";

interface time {
    time: Time,
    odd: number
}

export default class Bet {
    id: number
    time_1: time
    time_2: time
    aberto: Boolean
    vencedor: string | undefined


    private static nextId = 1

    constructor(time_1: time, time_2: time) {
        this.id = Bet.nextId++
        this.time_1 = time_1
        this.time_2 = time_2
        this.aberto = true
    }

}