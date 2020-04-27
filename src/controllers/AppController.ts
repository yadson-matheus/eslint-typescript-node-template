import { Request, Response } from 'express'

class AppController {
    public async index (request: Request, response: Response): Promise<object> {
        return response.status(200).json({ message: 'Welcome to the APP!' })
    }
}

export default new AppController()
