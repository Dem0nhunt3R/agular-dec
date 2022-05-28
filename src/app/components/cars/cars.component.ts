import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CarService} from "../../services";
import {ICar} from "../../models";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  form: FormGroup;
  cars: ICar[];
  carForUpdate: ICar | null;

  constructor(private carService: CarService) {
    this._createForm();
  }

  ngOnInit(): void {
    this.carService.getCars().subscribe(value => this.cars = value)
  }

  _createForm(): void {
    this.form = new FormGroup({
      model: new FormControl(null),
      price: new FormControl(null),
      year: new FormControl(null),
    })
  }

  saveCar() {
    if (!this.carForUpdate) {
      const newCar = this.form.getRawValue();
      console.log(newCar)
      this.carService.createCar(newCar).subscribe(value => {
        this.cars.push(value);
      })
    } else {
      this.carService.updateCarById(this.carForUpdate.id, this.form.getRawValue()).subscribe(value => {
        const find = this.cars.find(f => f.id === this.carForUpdate?.id);
        Object.assign(find, value);
        this.carForUpdate = null;
      })
    }
    this.form.reset();
  }

  deleteCar(id: number): void {
    this.carService.deleteCarById(id).subscribe(() => {
      const index = this.cars.findIndex(car => car.id === id);
      this.cars.splice(index, 1);
    })
  }


  updateCar(car: ICar): void {
    this.carForUpdate = car;
    console.log(car)
    this.form.setValue({
      model: car.model,
      price: car.price,
      year: car.year,
    })
  }
}
