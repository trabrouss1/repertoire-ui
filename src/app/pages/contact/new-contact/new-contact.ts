import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Field } from '@angular/forms/signals';

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
  }

}
