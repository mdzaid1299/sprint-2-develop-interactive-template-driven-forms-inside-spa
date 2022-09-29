import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Fruit } from '../models/fruit';
import { FruitService } from '../services/fruit.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-fruit',
  templateUrl: './add-fruit.component.html',
  styleUrls: ['./add-fruit.component.css']
})
export class AddFruitComponent implements OnInit {

  fruit: Fruit = {};
  nutrients = ['vitamin A', 'vitamin C', 'vitamin K', 'Magnesium', 'Iron', 'Potassium', 'Calcium'];
  benefits = ['Lower risks of heart disease,stroke,cancer',
  'promotes the growth of beneficial bacteria',
  'Improved blood suagr control and better digestive health',
  'Lower levels of inflammation, blood pressure and cholestrol',
  'Health promoting fruit',
  'Protects from chronic heart disease, Alzhimers,Parkinsons and certain form of cancer',
  'Decreases cholesterol level ad increases blood lutcin levels',
  'Supports digestion'];
  @Output()
  fruitAdded: EventEmitter<Fruit> = new EventEmitter<Fruit>();
  constructor(private fruitService: FruitService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {

  }
  onSubmit(addForm: any) {
    console.log(addForm.value);
    if (this.fruit.name)
      this.fruitService.addFruit(this.fruit).subscribe({
        next: data => {
          console.log(`Fruit:${this.fruit.nutrients}`);
          this.fruitAdded.emit(this.fruit);
          this.fruit = {};
          this._snackBar.open('Fruit added successfully', 'success', {
            duration: 3000,
            panelClass: ['mat-toolbar', 'mat-primary']
          })
        },
        error: e => {
          this._snackBar.open('Failed to Add Fruit due to Network Error !! Please Try Again Later', 'Failure', {
            duration: 3000,
            panelClass: ['mat-toolbar', 'mat-warn']
          });
        }
      });
  }

}
