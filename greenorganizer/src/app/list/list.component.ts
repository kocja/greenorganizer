import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ClothingService } from '../clothing.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  @Output() calculateClicked: EventEmitter<number> = new EventEmitter<number>();

  closet: any[] = [];
  private subscription: Subscription = new Subscription();

  constructor(private clothingService: ClothingService) {}

  ngOnInit() {
    this.subscription = this.clothingService.closet$.subscribe(updatedCloset => {
      this.closet = updatedCloset;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  calculate() {
    const sustainabilityScore = this.clothingService.calculateSustainabilityScore();
    this.calculateClicked.emit(sustainabilityScore);

    if (sustainabilityScore === 0) {
      console.log('Does not contain sustainable items.');
    } else if (sustainabilityScore === 1) {
      console.log('Contains items with low sustainability.');
    } else if (sustainabilityScore === 5) {
      console.log('Contains items with high sustainability.');
    } else {
      console.log(`Average sustainability score: ${sustainabilityScore}`);
    }
  }
}
