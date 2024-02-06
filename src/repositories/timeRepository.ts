import Time from "../models/Time"
import { getXataClient } from "../xata"

const client = getXataClient()

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

        criarTimeDB(time.nome)
        
        return resolve(novoTime)
    })
}

async function criarTimeDB(nome:String) {
    const db = await client.db.Time.create({
        nome: nome as string
    })
}

export default {
    getTime,
    getTimes,
    addTime
}