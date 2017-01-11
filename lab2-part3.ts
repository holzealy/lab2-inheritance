class Account {
    balance:number;
    ownerName:string;

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


class CheckingsAccount extends Account {
    constructor(initialBalance:number, ownerName:string) {
        super(initialBalance, ownerName);
    }
}

class SavingsAccount extends Account {
    private withdrawlLimit: number = 3;
    private withdrawls: number = 0;

    constructor(initialBalance: number, ownerName: string) {
        super(initialBalance, ownerName);
    }

    withdraw(amount: number) {
        if (this.withdrawls < this.withdrawlLimit) {
            this.balance -= amount;
            this.withdrawls++;
        } else {
            console.log("Sorry, you cannot make a withdrawl because you have exceeded the limit of withdrawls for this account.")
        }
    }
}

let newChecking:CheckingsAccount = new CheckingsAccount(1000, "Alyssa");
newChecking.checkBalance();
newChecking.deposit(100);
newChecking.checkBalance();
newChecking.withdraw(200);
newChecking.checkBalance();

let newSavings:SavingsAccount = new SavingsAccount(1000, "Holzer");
newSavings.checkBalance();
newSavings.deposit(100);
newSavings.checkBalance();
newSavings.withdraw(200);
newSavings.checkBalance();
newSavings.withdraw(200);
newSavings.checkBalance();
newSavings.withdraw(200);
newSavings.checkBalance();
newSavings.withdraw(200);
newSavings.checkBalance();