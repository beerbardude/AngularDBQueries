import { Policy } from '../../models/policy';

export const POLICIES: Policy[] = [
{ 
    id: 1, 
    policynumber: 'POL-0001-CH',
    customerId: 1,
    startdate: new Date("2004, 01, 21"),
    enddate: new Date("2029, 01, 21"),
    premium: new Number(2000001),
    currency: 'CHF'},
{ 
    id: 2, 
    policynumber: 'POL-0002-CH',
    customerId: 4,
    startdate: new Date("1999, 10, 27"),
    enddate: new Date("2025, 10, 27"),
    premium: new Number(5300002),
    currency: 'CHF'},
{ 
    id: 3, 
    policynumber: 'POL-0003-CH',
    customerId: 5,
    startdate: new Date("2010, 5, 10"),
    enddate: new Date("2040, 5, 10"),
    premium: new Number(3400003),
    currency: 'CHF'},
{ 
    id: 4, 
    policynumber: 'POL-0004-CH',
    customerId: 2,
    startdate: new Date("2001, 1, 14"),
    enddate: new Date("2033, 8, 16"),
    premium: new Number(450004),
    currency: 'CHF'},
{ 
    id: 5, 
    policynumber: 'POL-0005-CH',
    customerId: 3,
    startdate: new Date("2007, 4, 21"),
    enddate: new Date("2035, 6, 18"),
    premium: new Number(1020005),
    currency: 'CHF'},
{ 
    id: 6, 
    policynumber: 'POL-0006-CH',
    customerId: 1,
    startdate: new Date("2005, 2, 11"),
    enddate: new Date("2045, 1, 19"),
    premium: new Number(6472005),
    currency: 'CHF'}    
];
