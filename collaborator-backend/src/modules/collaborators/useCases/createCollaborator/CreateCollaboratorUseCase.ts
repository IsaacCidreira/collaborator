import { CollaboratorRepository } from '../../repositories/implementation/CollaboratorRepository';

interface IRequestCollaborator {
  name: string;
  cargo: string;
  telefone: string;
  url: string;
}

class CreateCollaboratorUseCase {
  constructor(private collaboratorRepository: CollaboratorRepository) {}

  execute({ name, cargo, telefone, url }: IRequestCollaborator): void {
    this.collaboratorRepository.create({ name, cargo, telefone, url });
  }
}

export { CreateCollaboratorUseCase };
