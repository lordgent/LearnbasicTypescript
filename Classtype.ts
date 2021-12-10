class Users {
  public name: string;
  constructor(name: string, public age: number) {
    this.name = name;
  }
}

let usernew = new Users("rafelino", 23);
console.log(usernew);
