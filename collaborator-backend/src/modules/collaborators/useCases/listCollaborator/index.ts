import { CollaboratorRepository } from '../../repositories/implementation/CollaboratorRepository';
import { ListCollaboratorController } from './ListCollaboratorController';
import { ListCollaboratorUseCase } from './ListCollaboratorUseCase';

const collaboratorRepository = CollaboratorRepository.getInstance();

const listCollaboratorUseCase = new ListCollaboratorUseCase(
  collaboratorRepository,
);

const listCollaboratorController = new ListCollaboratorController(
  listCollaboratorUseCase,
);

export { listCollaboratorController };
