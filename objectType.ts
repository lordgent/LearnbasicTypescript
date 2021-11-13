type User = {
  name: string;
  age: number;
  isDone: boolean;
};

let profile1: User = {
  name: "lordgent",
  age: 23,
  isDone: true,
};

let profile2: User = {
  name: "rafelino",
  age: 25,
  isDone: false,
};

let profile3: any = {
  name: "lordgent",
  age: 20,
  isDone: true,
};

console.log(profile3);
