import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  userId!: number;
  customer: Customer = new Customer();

  constructor(private customerService:CustomerService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.customer=new Customer();
    this.userId=this.route.snapshot.params['userId'];
    this.customerService.getCustomerByUserId(this.userId).
    subscribe(data =>{
      console.log(data);
      this.customer=data;
    }, error => console.log(error));
  }
  updateCustomer(){
    this.customerService.updateCustomer(this.userId, this.customer).subscribe(data =>{
      console.log(data);
      this.customer = new Customer();
       this.gotoCustomerList();
       alert("Updated Successfully");
    },
    error => console.log(error));
  }
  gotoCustomerList(){
    this.router.navigate(['/customers']);

  }
  onSubmit(){
    this.customerService.updateCustomer(this.userId, this.customer).subscribe(data =>{
      this.gotoCustomerList();
    },
    error => console.log(error));
  }

}
