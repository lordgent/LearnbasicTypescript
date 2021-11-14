// inheritance = perwasian
/* 
inheritence = Pewarisan/turunan pada class note setiap class biswa menurunkan atau mewarisi class parrent/child
*/

class Parentclass {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Childclass extends Parentclass {}

const child1 = new Childclass("anak ke 1");
console.log(child1);
