var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
// let's create a an instance
var myCustomer = new Customer("Chandimal", "Priyamantha");
console.log(myCustomer.firstName + myCustomer.lastName);
