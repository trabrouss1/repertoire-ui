import { Component, inject, OnInit, signal } from '@angular/core';
import { Header } from "./shared/reusableComponents/header/header";
import { form } from '@angular/forms/signals';
import { ContactModel } from './core/models/interfaces/contact-model';
import { ContactList } from "./pages/contact/contact-list/contact-list";
import { ContactService } from './core/services/contact/contact-service';
import { SearhBar } from "./shared/reusableComponents/searh-bar/searh-bar";
import { NewContact } from "./pages/contact/new-contact/new-contact";

@Component({
  selector: 'app-root',
  imports: [Header, ContactList, SearhBar, NewContact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  protected readonly title = signal('repertoire-ui');

  isModalOpen = signal(false);
  editingId = signal<number | null>(null);

  protected contactModel = signal<ContactModel>({
    nom: '',
    prenom: '',
    email: '',
    numero: '',
    image: '',
    entreprise: '',
    date_annniversaire: '',
    lieu: ''
  })

  protected readonly contactForm = form(this.contactModel);
  private readonly contactService = inject(ContactService)

  searchText = ''

  ngOnInit(): void {
    this.contactService.loadContacts();
  }

  ouvrirCreation() {
    this.editingId.set(null);
    this.contactForm().reset();
    this.isModalOpen.set(true);
  }

  fermerModal() {
    this.isModalOpen.set(false);
    this.contactForm().reset();
  }

  searchElement(){
    console.log("Element transmit");
  }

  onSubmit(event: Event) {
    event.preventDefault();
    this.contactService.createContact(this.contactModel());
  }
}
