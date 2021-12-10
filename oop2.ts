interface Epayment {
  brand: string;
  noreg: number;
  TakingMoney(): void;
}

class Epay implements Epayment {
  name: string;
  email: string;
  password: string;
  balance: number;
  address: string;
  getmoney: number;

  constructor(
    name: string,
    email: string,
    password: string,
    balance: number,
    address: string,
    getmoney: number
  ) {
    (this.name = name),
      (this.email = email),
      (this.password = password),
      (this.balance = balance),
      (this.address = address);
    this.getmoney = getmoney;
  }

  brand = "Epayment.com";
  noreg = 298292039321;
  TakingMoney(): void {
    return console.log(
      ` saldo awal = ${this.balance}  ${
        this.name
      } sedang mengambil uang sebesar = ${this.getmoney} total balance = ${
        this.balance - this.getmoney
      }`
    );
  }
}

const userone = new Epay(
  "lordgent",
  "lorjenx08@gmail.com",
  "12345",
  2400000000,
  "Surabaya Jawa timur",
  2000000
);

console.log(userone);
