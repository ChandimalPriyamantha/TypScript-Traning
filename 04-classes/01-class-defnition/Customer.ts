class Customer {

    firstName: string;
    lastName: string;

    constructor(theFirst: string, theLast: string){
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    
}


// let's create a an instance

let myCustomer = new Customer("Chandimal","Priyamantha");

console.log(myCustomer.firstName + myCustomer.lastName);