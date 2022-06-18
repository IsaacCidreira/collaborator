import { Collaborator } from '../../model/Collaborator';
import { CollaboratorRepository } from '../../repositories/implementation/CollaboratorRepository';

class ListCollaboratorUseCase {
  constructor(private collaboratorRepository: CollaboratorRepository) {}

  execute(): Collaborator[] {
    const collaborator = this.collaboratorRepository.list();
    return collaborator;
  }
}

export { ListCollaboratorUseCase };
