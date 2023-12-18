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
    'Forever21': 1,
    'H&M': 2,
    'Mango': 4,
    'Nike': 3,
    'Patagonia': 5,
    'Primark': 2,
    'Pull & Bear': 2,
    'Rework': 5,
    'Shein': 1,
    'Stradivarius': 2,
    'Topshop': 3,
    'Veja': 5,
    'Zara': 3,
    'Secondhand-Marke': 4,
    'andere Fast-Fashion Marke': 4,
  };

  typeScore: { [brand: string]: number } = {
    'Shirt (konv. Baumwolle)': 1,
    'Shirt (Bio-Baumwolle)': 3,
    'Jeans (konv. Baumwolle)': 1,
    'Jeans (Tencel)': 4,
    'Hose (konv. Baumwolle)': 4,
    'Schuhe': 2,
    'Accessoire': 4,
    'Jacke (Daunen)': 3,
    'Jacke (Leder)': 1,
    'andere': 1,
  };

  ageScore: { [brand: string]: number } = {
    'weniger als 1 Monat': 1,
    'weniger als 6 Monate': 2,
    'weniger als 1 Jahr': 3,
    '1-2 Jahre': 4,
    '2-3 Jahre': 5,
    'Älter als 3 Jahre': 5
  };

  addToCloset(newClothing: any) {
    const currentCloset = this.closetSource.value;
    const updatedCloset = [...currentCloset, newClothing];
    this.closetSource.next(updatedCloset);
  }

  calculateSustainabilityScore(): number {
    const closet = this.closetSource.value;

    // Your logic to calculate the sustainability score based on brandScores, typeScore, and ageScore
    const totalScore = closet.reduce((sum, item) => {
      const brand = item.brand;
      const type = item.type;
      const age = item.age;

      // Consider type and age scores in the calculation
      const brandScore = this.brandScores[brand] || 0;
      const typeScore = this.typeScore[type] || 0;
      const ageScore = this.ageScore[age] || 0;

      return sum + brandScore + typeScore + ageScore;
    }, 0);

    return totalScore; // Return the totalScore directly
  }

}
