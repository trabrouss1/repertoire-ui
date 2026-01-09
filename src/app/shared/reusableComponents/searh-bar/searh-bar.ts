import { Component, inject, model, output, OutputEmitterRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MasterService } from '../../../core/services/master/master-service';
import { ContactService } from '../../../core/services/contact/contact-service';

@Component({
  selector: 'app-searh-bar',
  imports: [FormsModule],
  templateUrl: './searh-bar.html',
  styleUrl: './searh-bar.css',
})
export class SearhBar {

  search = model('Tout');
  searchChange = output<string>();
  searchButtonChanged: OutputEmitterRef<void> = output<void>();

  private readonly contactServivce = inject(ContactService)

  searhChanged(){
    this.searchButtonChanged.emit();
    console.log("change value " + this.search());
  }
}
