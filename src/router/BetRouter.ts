import express from 'express'
import controller from '../controllers/betController'

const router = express.Router()

router.get('/:id', controller.getBet)

router.get('/', controller.getBets)

router.post("/", controller.addBet)

export default router