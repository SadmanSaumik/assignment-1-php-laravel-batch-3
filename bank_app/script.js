class BankAccount {
  accountNumber;
  ownerName;
  balance;
  constructor(accountNumber, ownerName, balance) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    this.balance = balance;
  }
  deposit(amount) {
    this.balance = this.balance + amount;
    console.log(`Deposited ${amount}. New balance: ${this.balance}`);
  }
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance = this.balance - amount;
      console.log(`Withdrawn ${amount}. New balance: ${this.balance}`);
    } else {
      console.log("Insufficient funds");
    }
  }
  getBalance() {
    console.log(this.balance);
    console.log(`Current balance: ${this.balance}`);
  }
  displayAccountInfo() {
    console.log(`
    Account Number = ${this.accountNumber}
    Owner Name = ${this.ownerName}
    Balance = ${this.balance}
    `);
  }
}

const account1 = new BankAccount(1001, "John Doe", 1000);
const account2 = new BankAccount(1002, "Jane Smith", 500);

console.log("Initial Account Information:");
account1.displayAccountInfo();
account2.displayAccountInfo();

console.log("\nDepositing to Account 1:");
account1.deposit(500);

console.log("\nWithdrawing from Account 2:");
account2.withdraw(200);

console.log("\nAttempting to withdraw more than the balance from Account 1:");
account1.withdraw(2000);

console.log("\nUpdated Account Information:");
account1.displayAccountInfo();
account2.displayAccountInfo();
