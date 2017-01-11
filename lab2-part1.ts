class Account {
    private balance:number;
    private ownerName:string;

    constructor(initialBalance:number, ownerName:string) {
        this.balance = initialBalance;
        this.ownerName = ownerName;
    }

    deposit(amount:number) {
        this.balance += amount;
    }

    withdraw(amount:number) {
        this.balance -= amount;
    }

    checkBalance() {
        console.log(`${this.ownerName}'s balance is: $${this.balance}'`);
    }

}

let newAccount:Account = new Account(1000, "Alyssa");
newAccount.checkBalance();
newAccount.deposit(100);
newAccount.checkBalance();
newAccount.withdraw(200);
newAccount.checkBalance();