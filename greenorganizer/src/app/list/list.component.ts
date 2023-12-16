import {Component, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ClothingService} from "../clothing.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  implements OnInit, OnDestroy {
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
// Assuming this.closet is defined in your component

// Array of fast fashion brands
    const fastFashionBrands = ["Bershka", "H&M", "Zara"];

// Filter items in this.closet that are fast fashion
    const fastFashionItems = this.closet.filter(item => fastFashionBrands.includes(item.brand));

// Log the result
    if (fastFashionItems.length === 0) {
      console.log("Does not contain fast fashion.");
    } else if (fastFashionItems.length === 1) {
      console.log("Contains 1 fast fashion item.");
    } else {
      console.log(`Contains ${fastFashionItems.length} fast fashion items.`);
    }
  }
}
