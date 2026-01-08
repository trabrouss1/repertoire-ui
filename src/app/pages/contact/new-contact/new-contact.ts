import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Field } from '@angular/forms/signals';
import { ContactList } from '../contact-list/contact-list';

@Component({
  selector: 'app-new-contact',
  imports: [Field],
  templateUrl: './new-contact.html',
  styleUrl: './new-contact.css',
})
export class NewContact {

  @Input() isOpen = false
  @Input() editingId: number | null = null;
  @Input() contactForm!: any;

  @Output() close = new EventEmitter<void>();
  @Output() submitForm = new EventEmitter<Event>();


  fermerModal() {
    this.close.emit();
  }

  onSubmit(event: Event) {
    event.preventDefault();
    this.submitForm.emit(event);
    // this.contactList.getAllContacts();
  }

}
