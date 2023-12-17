import {Component, Input, OnInit} from '@angular/core';
import {ClothingService} from "../../clothing.service";


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() closetLength: number = 0;

  constructor(private clothingService: ClothingService) {}

  ngOnInit() {
    this.closetLength = this.clothingService.calculateSustainabilityScore();
  }

}
