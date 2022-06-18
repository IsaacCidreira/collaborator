import { CollaboratorRepository } from '../../repositories/implementation/CollaboratorRepository';

class ListUniqueCollaboratorUseCase {
  constructor(private collaboratorRepository: CollaboratorRepository) {}

  execute(id: string, url: string) {
    const collaboratorExists = this.collaboratorRepository.findById(id);

    if (!collaboratorExists) {
      throw new Error('User not found');
    }
    const collaborator = this.collaboratorRepository.listOne(id);
    return collaborator;
  }
}

export { ListUniqueCollaboratorUseCase };
