import { required, schema, validate } from "@angular/forms/signals";
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

export const contactSchema = schema<ContactRequestDTO>( con => {
  required(con.nom, {message: "Le nom est obligatoire"})
  required(con.numero, {message: "Le numéro est obligatoire"})
})


export const getInitialValue = (): ContactRequestDTO => ({
  nom: '',
  prenom: '',
  email: '',
  numero: '',
  image: '',
  entreprise: '',
  date_annniversaire: ''
})