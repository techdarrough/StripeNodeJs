import express, { Request, Response, NextFunction } from 'express';
export const app = express();

app.use(express.json())

import cors from 'cors';
import { createStripeCheckoutSession } from './checkout';

app.use ( cors({ origin: true }));



app.post('/test', (req: Request, res: Response) =>{
    const amount = req.body.amout;
    

    res.status(200).send({ 'with_tax': amount * 7});
});

/**
 * Async wrapper function
 */

 function runAsync(callback: Function) {
    return (req: Request, res: Response, next: NextFunction) => {
      callback(req, res, next).catch(next);
    };
  }
  
  /**
   * Checkouts
   */
  app.post(
    '/checkouts/',
    runAsync( async ({ body }: Request, res: Response) => {
      res.send( 
        
        await createStripeCheckoutSession(body.line_items)
        
        );
    })
  );

