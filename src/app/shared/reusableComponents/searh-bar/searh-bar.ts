import { Component, model, output, OutputEmitterRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

  searhChanged(){
    this.searchButtonChanged.emit();
    console.log("change value");
  }
}
