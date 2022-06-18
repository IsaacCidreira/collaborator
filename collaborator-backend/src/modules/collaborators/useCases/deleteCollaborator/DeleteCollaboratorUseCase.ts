import { CollaboratorRepository } from '../../repositories/implementation/CollaboratorRepository';

class DeleteCollaboratorUseCase {
  constructor(private collaboratorRepository: CollaboratorRepository) {}

  execute(id: string) {
    this.collaboratorRepository.delete(id);
  }
}

export { DeleteCollaboratorUseCase };
