import { v4 as uuidV4 } from 'uuid';

class Collaborator {
  id: string;
  name: string;
  cargo: string;
  telefone: string;
  url: string;
  created_at: Date;
  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Collaborator };
