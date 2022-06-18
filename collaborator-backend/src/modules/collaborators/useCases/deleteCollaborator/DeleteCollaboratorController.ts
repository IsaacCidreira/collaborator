import { Request, Response } from 'express';
import { DeleteCollaboratorUseCase } from './DeleteCollaboratorUseCase';

class DeleteCollaboratorController {
  constructor(private deleteCollaboratorUseCase: DeleteCollaboratorUseCase) {}

  handle(request: Request, response: Response) {
    const { id } = request.params;

    this.deleteCollaboratorUseCase.execute(id);

    return response.status(201).send();
  }
}
export { DeleteCollaboratorController };
