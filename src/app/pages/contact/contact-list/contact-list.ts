import { Component, inject, OnInit, signal } from '@angular/core';
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
  
  ngOnInit(): void {
    this.getAllContacts();
  }


  getAllContacts(){
    this.contactService.getAllContacts().subscribe({
      next: (response: PaginatedResponse<ContactModel>) => {
        this.contacts.set(response.data);
      },
      error: (error) => {
        console.error("Une erreur s\'est produite lors du chargement des conatcts: ", error);
      }
    })
  }

}
