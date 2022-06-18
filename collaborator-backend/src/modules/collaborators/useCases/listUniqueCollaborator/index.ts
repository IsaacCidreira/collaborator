import { CollaboratorRepository } from '../../repositories/implementation/CollaboratorRepository';
import { ListUniqueCollaboratorController } from './listUniqueCollaboratorController';
import { ListUniqueCollaboratorUseCase } from './listUniqueCollaboratorUseCase';

const collaboratorRepository = CollaboratorRepository.getInstance();
const listUniqueCollaboratorUseCase = new ListUniqueCollaboratorUseCase(
  collaboratorRepository,
);
const listUniqueCollaboratorController = new ListUniqueCollaboratorController(
  listUniqueCollaboratorUseCase,
);

export { listUniqueCollaboratorController };
