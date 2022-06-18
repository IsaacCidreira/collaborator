import { Collaborator } from '../model/Collaborator';

interface ICreateCollaboratorDTO {
  id?: string;
  name: string;
  cargo: string;
  telefone: string;
  url: string;
}

interface ICollaboratorRepository {
  create({ name, cargo, telefone, url }: ICreateCollaboratorDTO): void;
  list(): Collaborator[];
  findById(id: string): Collaborator;
  update({ name, cargo, telefone, url }: ICreateCollaboratorDTO): Collaborator;
  delete(id: string): Collaborator[];
  listOne(id: string, url: string): Collaborator;
}

export { ICreateCollaboratorDTO, ICollaboratorRepository };
