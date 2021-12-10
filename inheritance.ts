// ======= Inheritance ========

// ( Super ) di gunakan jika ingin mendefiniskan constructor ke dalam child class

class Permission {
  name: string;

  constructor(name: string, public email: string) {
    this.name = name;
  }
}

class Admin extends Permission {
  create: boolean = true;
  read: boolean = true;
  update: boolean = true;
  delete: boolean = true;
  password: string;
  constructor(name: string, email: string, password: string) {
    super(name, email);
    this.password = password;
  }

  getAccess(): {
    create: boolean;
    read: boolean;
    update: boolean;
    delete: boolean;
  } {
    return {
      create: this.create,
      read: this.read,
      update: this.update,
      delete: this.delete,
    };
  }
}

class Member extends Permission {
  read: boolean = true;
  getUser(): {
    read: boolean;
  } {
    return {
      read: this.read,
    };
  }
}

const adminone = new Admin(
  "lordgent",
  "lordgent@gmail.com",
  "l9IJ9vfvfdjiddji4e4sawDAj9w"
);

const userr = new Member("rafelino", "rafelino@gmail.com");

console.log(adminone);
console.log(userr);
