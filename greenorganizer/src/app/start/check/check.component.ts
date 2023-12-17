import { Component } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent {
  result!: number;

  onCalculateClicked(result: number) {
    this.result = result;
  }
}
