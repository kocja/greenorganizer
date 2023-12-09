import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClothingService {

  private closetSource = new BehaviorSubject<any[]>([]);
  closet$ = this.closetSource.asObservable();

  addToCloset(newClothing: any) {
    const currentCloset = this.closetSource.value;
    const updatedCloset = [...currentCloset, newClothing];
    this.closetSource.next(updatedCloset);
  }
}
