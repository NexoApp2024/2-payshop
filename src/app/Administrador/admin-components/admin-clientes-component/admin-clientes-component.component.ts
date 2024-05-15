import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-admin-clientes-component',
  templateUrl: './admin-clientes-component.component.html',
  styleUrls: ['./admin-clientes-component.component.scss'],
})
export class AdminClientesComponentComponent  implements OnInit {
  @Output() changueNameSection = new EventEmitter();
  typeSelect = 'HOME_SELECTOR';


  constructor() { }

  ngOnInit() {}

  optionChange(nameSection: string, typeSelect: string): void {
    this.changueNameSection.emit(nameSection);
    this.typeSelect = typeSelect;
  }

}
