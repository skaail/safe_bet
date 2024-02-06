import 'express-async-errors'
import express, {Request, Response, NextFunction} from 'express'
import cors from 'cors'
import TimesRouter from './router/TimesRouter'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/times/', TimesRouter)

app.use((req: Request, res: Response, next: NextFunction) => {
    res.send("Olá Mundo!")
})

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).send(error.message)
})

export default app