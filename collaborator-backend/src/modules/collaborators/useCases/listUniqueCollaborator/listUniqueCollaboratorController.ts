import { Request, Response } from 'express';
import { ListUniqueCollaboratorUseCase } from './listUniqueCollaboratorUseCase';

class ListUniqueCollaboratorController {
  constructor(
    private listUniqueCollaboratorUseCase: ListUniqueCollaboratorUseCase,
  ) {}

  handle(request: Request, response: Response) {
    const { id } = request.params;
    let { url } = request.body;

    if (url === '') {
      url = 'https://freesvg.org/img/abstract-user-flat-4.png';
    }
    const updateCollaborator = this.listUniqueCollaboratorUseCase.execute(
      id,
      url,
    );

    response.status(201).json(updateCollaborator);
  }
}

export { ListUniqueCollaboratorController };
