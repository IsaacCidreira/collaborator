import { CollaboratorRepository } from '../../repositories/implementation/CollaboratorRepository';

interface IRequestCollaborator {
  id?: string;
  name: string;
  cargo: string;
  telefone: string;
  url: string;
}

class UpdateCollaboratorUseCase {
  constructor(private collaboratorRepository: CollaboratorRepository) {}

  execute({ id, name, cargo, telefone, url }: IRequestCollaborator): void {
    const collaboratorExists = this.collaboratorRepository.findById(id);

    if (!collaboratorExists) {
      throw new Error('User not found');
    }

    this.collaboratorRepository.update({ id, name, cargo, telefone, url });
  }
}

export { UpdateCollaboratorUseCase };
