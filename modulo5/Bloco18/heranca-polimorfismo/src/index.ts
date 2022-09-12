import express from "express"
import cors from "cors"

export const app = express();

app.use(express.json())
app.use(cors())



// HERANÇA

// Ex 1 
class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
    public interoduceYourself(): string {
        return `Olá, sou ${this.name}. Bom dia!`;
    }
  
    constructor(
          id: string,
          email: string,
          name: string,
          password: string
      ){
          console.log("Chamando o construtor da classe User")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
      }
  
      public getId(): string {
          return this.id
      }
  
      public getEmail(): string {
          return this.email
      }
  
      public getName(): string {
          return this.name
      }
  }
// a) Não, ela não tem get, então se mantem privada
// b) Nenhuma

// Ex 2
class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }
  }

// a) não foi
// b) não foi

// Ex 3
// a) Sim, não sei
const customer1 = new Customer ("123", "cliente@gmai.com", "Cliente", "123cliente", "12345546-34")
console.log(customer1)

// Ex 4
const customer2 = new Customer ("1234", "clienta@gmai.com", "Clienta", "123cliente", "12345546-34")
customer2.interoduceYourself()
console.log(customer2)

// Ex 5
// Implementado na classe User

// POLIMORFISMO

// Ex 1
interface Client {
    name: string;
    registrationNumber: number;
    consumedEnergy: number;
    calculateBill():number;
}

// a) 
const client: Client = {
    name: "Cliente",
    registrationNumber: 1,
    consumedEnergy: 100,
    calculateBill: () =>{
        return 2;
    }
}
console.log(client)

// Ex 2
abstract class Place {
    constructor(protected cep: string){}
    public getCep(): string{
        return this.cep;
    }
}
// a) Não é possível criar instancia de uma classe abstrata
const adress = new Place ("asedasad")

// b) para criar uma instância de uma classe abstrata precisamos
// declarar uma classe filha e criar uma instância dessa última.

// Ex 3
// 1-para criar uma instância de uma classe abstrata precisamos
// declarar uma classe filha e criar uma instância dessa última.

// 2-Place é uma classe porque precisa ter um acesso restrito
// a um dos seus atributos, o que é impossível de se fazer em interfaces.

// 3- Place é abstrata porque não enxergamos uma situação em que
// seria necessário criar uma instância dessa classe.

class Residence extends Place {
    constructor(
        private dwellersQuantity:number,
        cep: string
    ) {
        super(cep);
    }
    public getDwellersQuantity(): number{
        return this.dwellersQuantity
    }
}
class Commerce extends Place {
    constructor(
        protected floorsQuantity: number,
        cep: string
    ) {
        super(cep);
    }
}
class Industry extends Place {
    constructor(
        protected machinesQuantity: number,
        cep: string
    ) {
        super(cep);
    }
}

// Ex 4
class ResidentialClient extends Residence implements Client{
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cpf: string,
        residentsQuantity: number,
        cep: string
    ) {
        super(residentsQuantity, cep)
    }
    public getCpf(): string {
        return this.cpf;
    }
    public calculateBill(): number{
        return this.consumedEnergy * 0.75;
    }
}

// a) propriedades: name, registrationNumber, consumedEnergy, cpf.
// Métodos: getCpf, calculateBill

// Ex 5

class CommercialClient extends Commerce implements Client {
    constructor(
        public name:string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cnpj: string,
        floorsQuantity: number,
        cep: string
    ) {
        super(floorsQuantity, cep)
    }
    public calculateBill(): number {
        return this.consumedEnergy * 0.53;
    }
    public getCnpj(): string {
        return this.cnpj
    }
}
// a) as propriedades

// b) os métodos

// Ex 6

class IndustrialClient extends Industry implements Client {
    constructor (
        public name:string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private industryNumber: string | number,
        machinesQuantity: number,
        cep: string
    ) {
        super(machinesQuantity, cep);
    }
    public getIndustryNumber(): string | number{
        return this.industryNumber;
    }
    public calculateBill(): number{
        return this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
    }
}

// a) Da classe Industry

// b) Implementa a Client

// c)

app.listen(process.env.PORT || 3003, ()=>{
	console.log("Server is running on port 3003")
})