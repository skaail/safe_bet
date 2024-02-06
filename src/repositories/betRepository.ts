import Bet from "../models/Bet"

const bets : Bet[] = []

async function getBet(id:number): Promise<Bet | undefined>{
    return new Promise((resolve, reject) => {
        return resolve(bets.find(b => b.id === id))
    })
}

async function getBets(): Promise<Bet[]> {
    return new Promise((resolve, reject) => {
        return resolve(bets)
    })
}

async function addBet(bet:Bet): Promise<Bet>{
    return new Promise((resolve, reject) => {

        const newBet = new Bet(bet.time_1, bet.time_2)
        bets.push(newBet)

        return resolve(newBet)
    })
}

export default {
    getBet,
    getBets,
    addBet
}