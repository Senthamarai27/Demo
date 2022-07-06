import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  userId!: number;
  customer!: Customer; 

  constructor(private route:ActivatedRoute, private router:Router, private customerService: CustomerService) { }

  ngOnInit(): void {
    this.userId=this.route.snapshot.params['userId'];
    this.customer=new Customer();
    this.customerService.getCustomerByUserId(this.userId).subscribe(data =>{
      console.log(data)
      this.customer= data;
    }, error => console.log(error));
  }
  list(){
    this.router.navigate(['customers']);
  }
  

}
