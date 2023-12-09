import {Component, Input, OnDestroy, OnInit} from '@angular/core';
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

}
