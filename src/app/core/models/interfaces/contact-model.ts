import { BaseEntity } from "./base-entity.model";

export interface ContactModel extends BaseEntity {
  nom: string,
  prenom: string,
  email: string,
  numero: string,
  image: string,
  entreprise: string,
  date_annniversaire: string,
  lieu: string
}

export interface ContactRequestDTO {
  nom: string,
  prenom: string,
  email: string,
  numero: string,
  image: string,
  entreprise: string,
  date_annniversaire: string
}