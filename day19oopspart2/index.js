function Animals(name, bread, color) {
  this.name = name;
  this.bread = bread;
  this.color = color;
  // this.show = function (sound) {
  //   console.log("sound of animal", sound);
  // };
}

Animals.prototype.show = function (sound) {
  console.log("sound of animal", sound);
};

let jojo = new Animals("jojo", "dog", "white");
let tom = new Animals("tom", "cat", "grey");

jojo.show("bark");
tom.show("meow");
console.log(jojo);
console.log(tom);

console.log(jojo.show === tom.show);
