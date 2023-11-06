import { Component, Input, numberAttribute, booleanAttribute } from '@angular/core';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  @Input({ required: true }) type!: string;
  @Input({ required: true }) brand!: string;
  @Input({ required: true }) age!: string;

}
