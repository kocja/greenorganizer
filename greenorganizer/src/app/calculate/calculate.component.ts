import {Component, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ClothingService} from "../clothing.service";

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit{

  @Output()
  closet: any[] = []; // Initialize an array to hold clothing items

  clothingForm: FormGroup; // Initialize the clothing form
  constructor(private formBuilder: FormBuilder,
  private clothingService: ClothingService) {
    // Create the clothing form with form controls
    this.clothingForm = this.formBuilder.group({
      type: ['Kleidungsart auswählen', Validators.required],
      brand: ['Marke auswählen', Validators.required],
      age: ['Alter auswählen', Validators.required]
    });
  }

  onSubmit() {
    const typeControl = this.clothingForm.get('type');
    if (typeControl) {
      const typeValue = typeControl.value;
      const brandValue = this.clothingForm.get('brand')?.value;
      const ageValue = this.clothingForm.get('age')?.value;

      if (typeValue !== null && brandValue !== null && ageValue !== null) {
        const newClothing = {
          type: typeValue,
          brand: brandValue,
          age: ageValue
        };
        this.closet.push(newClothing);
        console.log(this.closet);
        this.clothingForm.reset({
          type: 'Kleidungsart auswählen',
          brand: 'Marke auswählen',
          age: 'Alter auswählen'
        });      }

      if (typeValue !== null && brandValue !== null && ageValue !== null) {
        const newClothing = {
          type: typeValue,
          brand: brandValue,
          age: ageValue
        };

        // Use the service to add the new clothing item
        this.clothingService.addToCloset(newClothing);
        this.clothingForm.reset({
          type: 'Kleidungsart auswählen',
          brand: 'Marke auswählen',
          age: 'Alter auswählen'
        });      }
    }
  }

  ngOnInit(): void {
  }

}
