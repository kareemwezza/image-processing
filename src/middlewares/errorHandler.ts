import { Request, Response, NextFunction } from 'express';

export class CustomeError {
  statusCode: number;
  message: string;
  constructor(message: string, statusCode = 501) {
    this.statusCode = statusCode;
    this.message = message;
  }
}
export default (
  error: CustomeError | Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let err = error;
  if (!(error instanceof CustomeError)) {
    err = new CustomeError(
      'Internal Server Error Occured! We are sorry for this inconvenience 😢. Please Try again later.',
      501
    );
  }
  const statusCode = (err as CustomeError).statusCode;
  res.status(statusCode).json(err);
};
