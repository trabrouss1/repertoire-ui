import { Component, inject, OnInit, signal } from '@angular/core';
import { Header } from "./shared/reusableComponents/headers/header";
import { form, submit } from '@angular/forms/signals';
import { ContactRequestDTO, contactSchema, getInitialValue } from './core/models/interfaces/contact-model';
import { ContactList } from "./pages/contact/contact-list/contact-list";
import { ContactService } from './core/services/contact/contact-service';
import { SearhBar } from "./shared/reusableComponents/searh-bar/searh-bar";
import { NewContact } from "./pages/contact/new-contact/new-contact";
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [Header, ContactList, SearhBar, NewContact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  isModalOpen = signal(false);
  editingId = signal<number | null>(null);

  protected contactModel = signal<ContactRequestDTO>(getInitialValue())

  protected readonly contactForm = form(this.contactModel, contactSchema);
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
    console.log("Element transmit " + this.searchText);
  }

  onSubmit(event: Event) {
    event.preventDefault();

    submit(this.contactForm, async () => {
      const contactData = this.contactForm().value();
      try {
        await lastValueFrom(this.contactService.createContacts(contactData));
        this.contactForm().reset()
        this.contactForm().value.set(getInitialValue());
        this.contactService.loadContacts();
      } catch (error) {
        console.log(error);
      }
    })

  }
}
