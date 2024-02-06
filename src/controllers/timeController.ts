import { Request, Response, NextFunction } from 'express'
import Time from '../models/Time'
import repository from '../repositories/TimeRepository'

async function getTime(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id
    const time = await repository.getTime(parseInt(id))

    if(time)
        res.json(time)
    else
        res.sendStatus(404)
}

async function getTimes(req: Request, res: Response, next: NextFunction) {
    const times = await repository.getTimes()

    res.json(times)
}

async function addTime(req: Request, res: Response, next: NextFunction) {
    const time = req.body as Time
    const result = await repository.addTime(time)

    if(result)
        res.status(201).json(result)
    else
        res.sendStatus(400)
}

export default {
    getTime,
    getTimes,
    addTime
}