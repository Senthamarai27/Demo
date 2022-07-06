import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customer: Customer = new Customer();
  constructor( private customerService:CustomerService, private router: Router) { }

  ngOnInit() {
  }
 

  saveCustomer(){
    this.customerService.createCustomer(this.customer).subscribe(data =>{
      console.log(data);
      this.gotoCustomerList();
    },
    error => console.log(error));
  }

  gotoCustomerList(){
    this.router.navigate(['/customers']);
    this.saveCustomer();

  }

  onSubmit(){
    this.saveCustomer();
    console.log(this.customer);
    alert("Customer Added");
  }

}
