import express, { Request, Response, NextFunction } from 'express';
export const app = express();

app.use(express.json())

import cors from 'cors';

app.use ( cors({ origin: true }));



app.post('/test', (req: Request, res: Response) =>{
    const amount = req.body.amout;

    res.status(200).send({ with_tax: amount * 7});
});