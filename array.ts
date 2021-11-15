const num: number = 40;
console.log("number :" + num);

// string only
const thisString: string = "hello world";

// array string only
let datas: string[] = ["hello", "world"];
console.log(datas);

// array number only
let arrNumber: number[];
arrNumber = [20, 21, 22, 23, 24];

console.log(arrNumber);

// boolean only
let booleanOnly: boolean = true;
booleanOnly = false;
console.log(booleanOnly);

// declaration any
let thisAny: any;

thisAny = "lordgent";
thisAny = 23;
thisAny = true;

let arrAny: any;
arrAny = {
  name: "lordgent",
  age: 23,
  isDone: true,
};

console.log(arrAny);

// tupel
let user: [string, number];
user = ["hello world", 22230];
console.log(user);

// union
let phone: string | number;

phone = "088235886038";
phone = 688235886038;

console.log(phone);
