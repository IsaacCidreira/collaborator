import { Request, Response } from 'express';
import { UpdateCollaboratorUseCase } from './UpdateCollaboratorUseCase';

class UpdateCollaboratorController {
  constructor(private updateCollaboratorUseCase: UpdateCollaboratorUseCase) {}

  handle(request: Request, response: Response) {
    const { id } = request.params;
    let { name, cargo, telefone, url } = request.body;
    if (url === '') {
      url = 'https://freesvg.org/img/abstract-user-flat-4.png';
    }

    this.updateCollaboratorUseCase.execute({ id, name, cargo, telefone, url });

    return response.status(201).send();
  }
}

export { UpdateCollaboratorController };
