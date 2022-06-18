import { Request, Response } from 'express';
import { ListCollaboratorUseCase } from './ListCollaboratorUseCase';

class ListCollaboratorController {
  constructor(private listCollaboratorUseCase: ListCollaboratorUseCase) {}

  handle(request: Request, response: Response) {
    const all = this.listCollaboratorUseCase.execute();
    return response.json(all);
  }
}

export { ListCollaboratorController };
