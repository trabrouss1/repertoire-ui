import { Component, signal } from '@angular/core';
import { Header } from "./shared/reusableComponents/header/header";
import { form, Field } from '@angular/forms/signals';
import { ContactModel } from './core/models/interfaces/contact-model';
import { ContactList } from "./pages/contact/contact-list/contact-list";

@Component({
  selector: 'app-root',
  imports: [Header, Field, ContactList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('repertoire-ui');

  contacts = [
    {
      id: 1,
      nom: 'Dupont',
      prenom: 'Marie',
      telephone: '+33 6 12 34 56 78',
      email: 'marie.dupont@email.com',
      photo: 'https://i.pravatar.cc/150?img=1'
    },
    {
      id: 2,
      nom: 'Martin',
      prenom: 'Jean',
      telephone: '+33 6 98 76 54 32',
      email: 'jean.martin@email.com',
      photo: 'https://i.pravatar.cc/150?img=12'
    },
    {
      id: 3,
      nom: 'Bernard',
      prenom: 'Sophie',
      telephone: '+33 6 45 67 89 01',
      email: 'sophie.bernard@email.com',
      photo: 'https://i.pravatar.cc/150?img=5'
    }
  ];

  contactsInput: ContactModel[] = [];

  isModalOpen = signal(false);
  editingId = signal<number | null>(null);

  protected contactModel = signal<ContactModel>({
    nom: '',
    prenom: '',
    email: '',
    numero: '',
    image: '',
    entreprise: '',
    date_annniversaire: ''    
  })

  protected readonly contactForm = form(this.contactModel);

  ouvrirCreation() {
    this.editingId.set(null);
    this.contactForm().reset();
    this.isModalOpen.set(true);
  }

  ouvrirEdition(contact: any) {
    this.editingId.set(contact.id!);
    this.isModalOpen.set(true);
  }

  fermerModal() {
    this.isModalOpen.set(false);
    this.contactForm().reset();
  }


  modifierContact(id: string){
    console.log('modifierContact');
  }

  supprimerContact(id: string){
    console.log('supprimerContact');
  }

  submit(event: Event){
    event.preventDefault();
    console.log(event);
  }
}
