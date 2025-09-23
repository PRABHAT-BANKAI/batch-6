class Animals {
  constructor(name, bread, color) {
    this.name = name;
    this.bread = bread;
    this.color = color;
  }

  show(sound) {
    console.log(`${this.name}animal sound`, sound);
  }
}

class Cat extends Animals {
  constructor(name, bread, color) {
    super(name, bread, color);
  }
}

const tom = new Cat("tom", "cat", "grey");

console.log(tom);
