/*Let's build upon a previous account object exercise. A bank account is still defined by:

A name property.
A balance property, initially set to 0.
A credit method adding the value passed as an argument to the account balance.
A describe method returning the account description.

Write a program that creates three accounts: one belonging to Sean, another to Brad and the third one to Georges. These accounts are stored in an array. Next, the program credits 1000 to each account and shows its description.*/

class Account {
     constructor(name, balance){
     this.name = name;
     this.balance = balance;
     balance = 0;
}
     credit(amount) {
          return Number(balance += amount);
     }
     describe() {
          return `You have ${account.balance} in your account.`;
     }
}

account.credit(500);
account.credit(-10);

console.log(account.describe());