import { HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';

export function authMiddleware(req: Request, res: Response, next: () => void) {
  if (!req.headers.authorization) {
    return res
      .status(HttpStatus.UNAUTHORIZED)
      .json({ message: 'Unauthorized' });
  }
  next();
}
