import express from 'express'

import usersRoutes from './routes/users.routes'

const app = express()

app.use('/users', usersRoutes)

app.listen(3333, () => console.log('The server is running on port 3333'))