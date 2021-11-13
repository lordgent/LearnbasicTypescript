// Interface
interface Laptop {
  brand: string;
  on(): void;
  off(): void;
}

class Thinkpad implements Laptop {
  on(): void {
    return console.log("Screen On");
  }
  off(): void {
    return console.log("Screen Off");
  }
  brand: string = "Thinkpad X240";
}

const thinkpad = new Thinkpad();

console.log(thinkpad.on());
