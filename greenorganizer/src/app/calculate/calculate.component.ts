import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit{

  closet: any[] = []; // Initialize an array to hold clothing items
  clothingForm: FormGroup; // Initialize the clothing form

  constructor(private formBuilder: FormBuilder) {
    // Create the clothing form with form controls
    this.clothingForm = this.formBuilder.group({
      type: [Validators.required],
      brand: [''],
      age: ['']
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
        this.clothingForm.reset();
      }
    }
  }

  ngOnInit(): void {
  }

}
