import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from './customer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  newCustomer  : Customer = {} as Customer
  customerList : Customer[] = []

  shouldAddDDD = false

  saveData(myForm: NgForm) {
    this.customerList.push(this.newCustomer)
    this.newCustomer = {} as Customer
    myForm.resetForm()
  }

}
