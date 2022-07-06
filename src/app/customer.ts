import { Address } from "./address";

export class Customer {
    userId: number=0;
    name:string ="";
    email:string ="";
    contactNo:string="";
    dob!: Date;
    address: Address=new Address();
}
