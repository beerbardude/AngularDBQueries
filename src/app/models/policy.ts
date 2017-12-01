import { Customer } from "./customer";

export class Policy {
    id: number;
    policynumber: string;
    customerId: number;
    startdate: Date;
    enddate: Date;
    premium: number;
    currency: string;    
}