import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ContactModel } from '../../../core/models/interfaces/contact-model';
import { ContactService } from '../../../core/services/contact/contact-service';

@Component({
  selector: 'app-contact-list',
  imports: [],
  templateUrl: './contact-list.html',
  styleUrl: './contact-list.css',
})
export class ContactList {

  private readonly contactService = inject(ContactService);

  contacts = this.contactService.contacts;

  
  modifierContact(id?: string) {
    console.log("L'ID de l'élèment a modifier est : " + id);
  }

  supprimerContact(id?: string): void {
    console.log("L'ID de l'élèment a supprimé est : " + id);   
    if (id) this.contactService.deleteContact(id);
    
  }

}
