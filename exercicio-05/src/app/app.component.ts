import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from './customer';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  customerList : Customer[] = []
  newCustomer : Customer = {} as Customer 

  constructor(private service: CustomerService) {}

  ngOnInit() {
    this.loadData()
  }

  loadData() {
    this.service.getCustomerList().subscribe(items => {
      this.customerList = items
    })    
  }

  saveData(form: NgForm) {
    if (this.newCustomer.id) {
      this.service.updateCustomer(this.newCustomer).subscribe(item => {
        form.resetForm()
        this.newCustomer = {} as Customer
        this.loadData()
      })
    } else {
      this.service.createCustomer(this.newCustomer).subscribe(item => {
        form.resetForm()
        this.newCustomer = {} as Customer
        this.loadData()
      })
    }
  }

  deleteCustomer(customerId: number) {
    this.service.deleteCustomer(customerId).subscribe(() => {
      this.loadData()
    })
  }

  updateCustomer(customer: Customer) {
    this.newCustomer.id = customer.id
    this.newCustomer.nome = customer.nome
    this.newCustomer.cpf = customer.cpf
    this.newCustomer.email = customer.email
  }
}
