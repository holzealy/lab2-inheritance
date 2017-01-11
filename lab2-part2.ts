class SavingsAccount {
    private balance: number;
    private ownerName: string;
    private withdrawlLimit: number = 3;
    private withdrawls: number = 0;

    constructor(initialBalance: number, ownerName: string) {
        this.balance = initialBalance;
        this.ownerName = ownerName;
    }

    deposit(amount: number) {
        this.balance += amount;
    }

    withdraw(amount: number) {
        if (this.withdrawls < this.withdrawlLimit) {
            this.balance -= amount;
            this.withdrawls++;
        } else {
            console.log("Sorry, you cannot make a withdrawl because you have exceeded the limit of withdrawls for this account.")
        }
    }

    checkBalance() {
        console.log(`${this.ownerName}'s balance is: $${this.balance}'`);
    }

}

let newAccount: SavingsAccount = new SavingsAccount(1000, "Alyssa");
console.log("first withdrawl:");
newAccount.withdraw(100);
newAccount.checkBalance();
console.log("second withdrawl:");
newAccount.withdraw(200);
newAccount.checkBalance();
console.log("third withdrawl:");
newAccount.withdraw(300);
newAccount.checkBalance();
console.log("fourth withdrawl:");
newAccount.withdraw(400);
newAccount.checkBalance();