import express from 'express'
import { index } from '../controllers/users.controller'

const router = express.Router()

router.get('/', index)

export default router