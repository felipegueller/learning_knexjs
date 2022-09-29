import { db }  from '../database/index'
import { Request, Response, ErrorRequestHandler } from 'express'

const index = async (req: Request, res: Response) => {
  try {
    const data = await db('users')

    return res.json(data)
  } catch (error) {
    console.log(error)
  }
}

export { index}