import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ClothingService } from '../clothing.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  closet: any[] = [];
  private subscription: Subscription = new Subscription();
  sustainabilityScore: number = 0;

  @Output() calculateClicked: EventEmitter<number> = new EventEmitter<number>(); // Update the event type

  constructor(private clothingService: ClothingService) {}

  ngOnInit() {
    this.subscription = this.clothingService.closet$.subscribe(updatedCloset => {
      this.closet = updatedCloset;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onCalculateClicked() {
    this.sustainabilityScore = this.clothingService.calculateSustainabilityScore();
    console.log('Sustainability Score:', this.sustainabilityScore);

    // Emit the sustainability score
    this.calculateClicked.emit(this.sustainabilityScore);
  }
}
