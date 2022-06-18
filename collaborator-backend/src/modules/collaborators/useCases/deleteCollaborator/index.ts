import { CollaboratorRepository } from '../../repositories/implementation/CollaboratorRepository';
import { DeleteCollaboratorController } from './DeleteCollaboratorController';
import { DeleteCollaboratorUseCase } from './DeleteCollaboratorUseCase';

const collaboratorRepository = CollaboratorRepository.getInstance();
const deleteCollaboratorUseCase = new DeleteCollaboratorUseCase(
  collaboratorRepository,
);
const deleteCollaboratorController = new DeleteCollaboratorController(
  deleteCollaboratorUseCase,
);

export { deleteCollaboratorController };
