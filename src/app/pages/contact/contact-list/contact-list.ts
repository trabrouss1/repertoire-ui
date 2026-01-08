import { Component, inject, signal } from '@angular/core';
import { ContactService } from '../../../core/services/contact/contact-service';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-contact-list',
  imports: [NgxSkeletonLoaderModule],
  templateUrl: './contact-list.html',
  styleUrl: './contact-list.css',
})
export class ContactList {

  private readonly contactService = inject(ContactService);

  contacts = this.contactService.contacts;
  isLoading = this.contactService.isLoading;
  
  modifierContact(id?: string) {
    console.log("L'ID de l'élèment a modifier est : " + id);
  }

  supprimerContact(id?: string): void {
    const deleted = confirm("Voulez-vous vraiment supprimé ce contact ?")
    if (deleted && id ) this.contactService.deleteContact(id);
  }

}
