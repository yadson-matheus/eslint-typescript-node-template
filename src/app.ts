import express from 'express'
import cors from 'cors'

import AppController from './controllers/AppController'

class App {
    public express: express.Application

    public constructor () {
        this.express = express()

        this.middlewares()
        this.database()
        this.routes()
    }

    private middlewares (): void {
        this.express.use(express.json())
        this.express.use(cors())
    }

    private database (): void {
        // TO DO
    }

    private routes (): void {
        this.express.get('/', AppController.index)
    }
}

export default new App().express
