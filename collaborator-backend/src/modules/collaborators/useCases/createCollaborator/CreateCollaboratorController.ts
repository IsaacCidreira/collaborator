import { Request, Response } from 'express';
import { CreateCollaboratorUseCase } from './CreateCollaboratorUseCase';

class CreateCollaboratorController {
  constructor(private createCollaboratorUseCase: CreateCollaboratorUseCase) {}

  handle(request: Request, response: Response) {
    let { name, cargo, telefone, url } = request.body;

    if (url === '') {
      url = 'https://freesvg.org/img/abstract-user-flat-4.png';
    }
    if (!name) {
      return response.status(404).json({ error: 'Name is required' });
    }
    this.createCollaboratorUseCase.execute({ name, cargo, telefone, url });

    return response.status(201).send();
  }
}
export { CreateCollaboratorController };
