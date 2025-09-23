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

let jojo = new Animals("jojo", "dog", "white");
let tom = new Animals("tom", "cat", "grey");

console.log(tom);
tom.show("meow");

jojo.show("bark");

console.log(jojo.show == tom.show);
