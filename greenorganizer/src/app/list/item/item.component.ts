import { Component, Input, numberAttribute, booleanAttribute } from '@angular/core';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  @Input() type: string | undefined;
  @Input() brand: string | undefined;
  @Input() age: string | undefined;

}
