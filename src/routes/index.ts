import { Router, Request, Response, NextFunction } from 'express';

import resize from '../utils/resize';

const router = Router();

interface Resize {
  name: string;
  width: string;
  height: string;
}

router.get('/', async (req: Request, res: Response) => {
  res.status(200).json({ message: 'Welocome To Image Processing API 😋.' });
});

router.get(
  '/images/resize',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, width, height } = req.query as unknown as Resize;
      const response = await resize(name, width, height);
      return res.status(201).sendFile(response);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
