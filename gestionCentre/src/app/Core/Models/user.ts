import {Role} from "./role";

export class User {
  id!: number;
  nom!: string;
  prenom!: string;
  email!: string;
  password!: string;
  // dateNaissance !: Date ;
  role!: Role;
}
