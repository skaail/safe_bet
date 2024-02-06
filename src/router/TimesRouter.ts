import express from 'express'
import controller from '../controllers/timeController'

const router = express.Router()

router.get('/:id', controller.getTime)

router.get('/', controller.getTimes)

router.post("/", controller.addTime)

export default router