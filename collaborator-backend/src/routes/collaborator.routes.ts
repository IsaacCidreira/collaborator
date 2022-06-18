import { Router } from 'express';
import { createCollaboratorController } from '../modules/collaborators/useCases/createCollaborator';
import { deleteCollaboratorController } from '../modules/collaborators/useCases/deleteCollaborator';
import { listCollaboratorController } from '../modules/collaborators/useCases/listCollaborator';
import { listUniqueCollaboratorController } from '../modules/collaborators/useCases/listUniqueCollaborator';
import { updateCollaboratorController } from '../modules/collaborators/useCases/updateCollaborator';

const collaboratorRoutes = Router();

collaboratorRoutes.post('/', (request, response) => {
  return createCollaboratorController.handle(request, response);
});

collaboratorRoutes.get('/', (request, response) => {
  return listCollaboratorController.handle(request, response);
});

collaboratorRoutes.put('/:id', (request, response) => {
  return updateCollaboratorController.handle(request, response);
});

collaboratorRoutes.delete('/:id', (request, response) => {
  return deleteCollaboratorController.handle(request, response);
});

collaboratorRoutes.get('/:id', (request, response) => {
  return listUniqueCollaboratorController.handle(request, response);
});

export { collaboratorRoutes };
