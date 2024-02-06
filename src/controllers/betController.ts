import { Request, Response, NextFunction } from 'express'
import Bet from '../models/Bet'
import repository from '../repositories/betRepository'

async function getBet(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id
    const time = await repository.getBet(parseInt(id))

    if(time)
        res.json(time)
    else
        res.sendStatus(404)
}

async function getBets(req: Request, res: Response, next: NextFunction) {
    const times = await repository.getBets()

    res.json(times)
}

async function addBet(req: Request, res: Response, next: NextFunction) {
    const bet = req.body as Bet
    const result = await repository.addBet(bet)

    if(result)
        res.status(201).json(result)
    else
        res.sendStatus(400)
}

export default {
    getBet,
    getBets,
    addBet
}