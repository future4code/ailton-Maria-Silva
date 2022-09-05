// Ex 1

// a)Para executar as possíveis ações dentro de uma instância de classe

// b) Uma vez

type Transaction = {
    description: string,
    value: number,
    date: string
}

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
  
  }

  const user1 = new UserAccount ("0864870182", "Helena Silva", 3)

// c) Usando o método Getters


// 2)

class TransactionTwo {
    private description: string;
    private value: number;
    private date: string;

    constructor(description:string, value: number, date: string,){
        this.description = description, 
        this.value = value,
        this.date = date
    }
}
 

// 3

class Bank {
    private accounts: UserAccount[];

    constructor(accounts: UserAccount[]){
        this.accounts = accounts;
    }

    public getAccounts(){
        return this.accounts
    }

    public setAccounts(
        newAccounts: UserAccount[]
    ) {
        this.accounts = newAccounts
    }
}


