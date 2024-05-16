

// classes 


// We use classes and constructors in JavaScript to create reusable blueprints for objects. Classes define the structure and behavior of objects, while constructors initialize new objects with predefined properties and values. This approach helps in organizing code, promoting reusability, and ensuring consistency when creating multiple instances of objects.

// Classes in JavaScript:
// In JavaScript, classes were introduced in ECMAScript 2015 (ES6).
// A class is a type of function, but instead of using the function keyword, you use the class keyword to declare it.
// Classes can have constructors for initializing objects, and they can also have methods.
// Here's an example of defining a class in JavaScript:


class Animal {
    constructor(name, legcount, speaks) {
        this.name = name;
        this.legcount = legcount;
        this.speaks = speaks;
    }
    speak(){
        console.log("hi there is ", this.name, this.speaks);
    }
};




let dog = new Animal("Dog", 4, "bhow bhow");
let cat = new Animal("Cat", 4, "meow");

console.log(dog);

cat.speak();
