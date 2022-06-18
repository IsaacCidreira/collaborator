import { CollaboratorRepository } from '../../repositories/implementation/CollaboratorRepository';
import { UpdateCollaboratorController } from './UpdateCollaboratorController';
import { UpdateCollaboratorUseCase } from './UpdateCollaboratorUseCase';

const collaboratorRepository = CollaboratorRepository.getInstance();

const updateCollaboratorUseCase = new UpdateCollaboratorUseCase(
  collaboratorRepository,
);

const updateCollaboratorController = new UpdateCollaboratorController(
  updateCollaboratorUseCase,
);

export { updateCollaboratorController };
