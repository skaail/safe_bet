import Time from "../models/Time"

const times : Time[] = []

async function getTime(id: number): Promise<Time | undefined> {
    return new Promise((resolve, reject) => {
        return resolve(times.find(t => t.id === id))
    })
}

async function getTimes(): Promise<Time[]> {
    return new Promise((resolve, reject) => {
        return resolve(times)
    })
}

async function addTime(time:Time): Promise<Time> {
    return new Promise((resolve, reject) => {
        if(!time.nome) return reject(new Error(`Time inválido`))

        if(times.find(t => t.nome === time.nome)) return reject(new Error(`Time já existente`))

        const novoTime = new Time(time.nome)
        times.push(novoTime)
        
        return resolve(novoTime)
    })
}

export default {
    getTime,
    getTimes,
    addTime
}