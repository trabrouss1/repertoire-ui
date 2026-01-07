import { BaseEntity } from "./base-entity.model";

export interface ContactModel extends BaseEntity {
  nom: string,
  prenom: string,
  email: string,
  numero: string,
  image: string,
  entreprise: string,
  date_annniversaire: string
}