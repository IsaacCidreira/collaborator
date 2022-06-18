import { CollaboratorRepository } from '../../repositories/implementation/CollaboratorRepository';
import { CreateCollaboratorController } from './CreateCollaboratorController';
import { CreateCollaboratorUseCase } from './CreateCollaboratorUseCase';

const collaboratorRepository = CollaboratorRepository.getInstance();
const createCollaboratorUseCase = new CreateCollaboratorUseCase(
  collaboratorRepository,
);
const createCollaboratorController = new CreateCollaboratorController(
  createCollaboratorUseCase,
);

export { createCollaboratorController };
