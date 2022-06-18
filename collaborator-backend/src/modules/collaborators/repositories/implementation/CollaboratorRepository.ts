import { Collaborator } from '../../model/Collaborator';
import { v4 as uuidV4 } from 'uuid';

import {
  ICollaboratorRepository,
  ICreateCollaboratorDTO,
} from '../ICollaboratorRepositories';

class CollaboratorRepository implements ICollaboratorRepository {
  private collaborator: Collaborator[];

  private static INSTANCE: CollaboratorRepository;

  private constructor() {
    this.collaborator = [
      {
        id: uuidV4(),
        name: 'Adriano',
        cargo: 'Programador',
        telefone: '11993178765',
        created_at: new Date(),
        url: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      },
      {
        id: uuidV4(),
        name: 'Maria',
        cargo: 'Tech Recruiter',
        telefone: '11987786565',
        created_at: new Date(),
        url: 'https://freesvg.org/img/abstract-user-flat-4.png',
      },
    ];
  }
  listOne(id: string): Collaborator {
    const collaborator = this.collaborator.find((contact) => contact.id === id);

    return collaborator;
  }

  public static getInstance(): CollaboratorRepository {
    if (!CollaboratorRepository.INSTANCE) {
      CollaboratorRepository.INSTANCE = new CollaboratorRepository();
    }

    return CollaboratorRepository.INSTANCE;
  }

  create({
    name,
    cargo,
    telefone,
    url = 'https://freesvg.org/img/abstract-user-flat-4.png',
  }: ICreateCollaboratorDTO): void {
    const collaborator = new Collaborator();
    Object.assign(collaborator, {
      name,
      cargo,
      telefone,
      url,
      created_at: new Date(),
    });

    this.collaborator.push(collaborator);
  }

  list(): Collaborator[] {
    return this.collaborator;
  }

  update({
    id,
    name,
    cargo,
    telefone,
    url = 'https://freesvg.org/img/abstract-user-flat-4.png',
  }: ICreateCollaboratorDTO): Collaborator {
    const collaborator = this.collaborator.find((contact) => contact.id === id);

    collaborator.name = name;
    collaborator.cargo = cargo;
    collaborator.telefone = telefone;
    collaborator.url = url;

    return collaborator;
  }

  findById(id: string): Collaborator {
    const collaborator = this.collaborator.find((contact) => contact.id === id);

    return collaborator;
  }

  delete(id: string): Collaborator[] {
    this.collaborator = this.collaborator.filter(
      (contact) => contact.id !== id,
    );

    return this.collaborator;
  }
}

export { CollaboratorRepository };
