import { Component, inject } from '@angular/core';
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
    const deleted = confirm("Voulez-vous vraiment supprimé ce contact ?")
    if (deleted && id ) this.contactService.deleteContact(id);
  }

}
