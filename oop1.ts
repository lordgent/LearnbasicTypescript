//  Object Orientde in type script
class People {
  name: string = "";
  hobies: string = "";
  phonenumber: number = 1;

  getData() {
    return (
      "name :" +
      this.name +
      "Hobies :" +
      this.hobies +
      " phone :" +
      this.phonenumber
    );
  }
}
const user1 = new People();

(user1.name = "lordgent"),
  (user1.hobies = "learn coding"),
  (user1.phonenumber = 628817083978);

//=======================

class Ewallet {
  name: string = "";
  noaccount: number = 0;
  balance: number = 0;
  history: Array<any> = [];
  constructor(
    name: string,
    account: number,
    balance: number,
    history: Array<any>
  ) {
    (this.name = name),
      (this.noaccount = account),
      (this.balance = balance),
      (this.history = history);
  }
}

let arr: any = {
  transaction: "not transaction",
};
const userOne: any = new Ewallet("lordgent", 53849399324213, 3500000, [arr]);
const userTwo: any = new Ewallet("rafelino", 53849393231905, 120000000, [arr]);

console.log(userOne);
console.log(userTwo);
