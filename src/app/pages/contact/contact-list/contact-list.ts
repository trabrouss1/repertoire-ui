import { Component, EventEmitter, inject, Input, OnInit, Output, signal } from '@angular/core';
import { ContactService } from '../../../core/services/contact/contact-service';
import { ContactModel } from '../../../core/models/interfaces/contact-model';
import { PaginatedResponse } from '../../../core/models/interfaces/base-entity.model';

@Component({
  selector: 'app-contact-list',
  imports: [],
  templateUrl: './contact-list.html',
  styleUrl: './contact-list.css',
})
export class ContactList implements OnInit {
  
  private readonly contactService = inject(ContactService);
  protected contacts = signal<ContactModel[]>([]);

  @Output() editContact = new EventEmitter<string>();
  @Output() deleteContact = new EventEmitter<string>();
  @Input() contactsInput: ContactModel[] = [];
  
  ngOnInit(): void {
    this.getAllContacts();
  }
  
  getAllContacts(){
    this.contactService.getAllContacts().subscribe({
      next: (response: PaginatedResponse<ContactModel>) => {
        this.contacts.set(response.data);
        console.log(" contacts " + this.contacts);
      },
      error: (error) => {
        console.error("Une erreur s\'est produite lors du chargement des contacts: ", error);
      }
    })
  }

  modifierContact(id?: string) {
    this.editContact.emit(id);
  }

  supprimerContact(id?: string) {
    this.deleteContact.emit(id);
  }

}
