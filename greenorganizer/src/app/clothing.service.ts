import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClothingService {

  private closetSource = new BehaviorSubject<any[]>([]);
  closet$ = this.closetSource.asObservable();

  brandScores: { [brand: string]: number } = {
    'Adidas': 4,
    'Bershka': 5,
    'H&M': 3,
    'Mango': 4,
    'Nike': 4,
    'Patagonia': 5,
    'Primark': 2,
    'Pull & Bear': 3,
    'Rework': 5,
    'Shein': 1,
    'Stradivarius': 2,
    'The North Face': 3,
    'Tommy Hilfiger': 3,
    'Topshop': 2,
    'Veja': 5,
    'Zara': 2,
    'andere Secondhand-Marke': 4,
    'andere Fast-Fashion Marke': 4,
  };

  addToCloset(newClothing: any) {
    const currentCloset = this.closetSource.value;
    const updatedCloset = [...currentCloset, newClothing];
    this.closetSource.next(updatedCloset);
  }

  calculateSustainabilityScore(): number {
    const closet = this.closetSource.value;

    // Your logic to calculate the sustainability score based on brandScores
    const totalScore = closet.reduce((sum, item) => {
      const brand = item.brand;
      return sum + (this.brandScores[brand] || 0);
    }, 0);

    // Calculate average sustainability score
    return closet.length > 0 ? totalScore / closet.length : 0;
  }
}
