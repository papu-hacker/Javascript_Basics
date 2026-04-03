Here’s a clear explanation of **Abstraction, Encapsulation, Inheritance, and Polymorphism in JavaScript** with simple examples 👇

---

# 1. Abstraction (Hide complexity)

**Idea:** Show only necessary features and hide internal details.

### Example:

```javascript
class Car {
  start() {
    this.#igniteEngine();
    console.log("Car started");
  }

  #igniteEngine() {   // private method
    console.log("Engine igniting...");
  }
}

const c = new Car();
c.start();
// c.#igniteEngine(); ❌ Not accessible
```

👉 User only calls `start()`, internal working is hidden.

---

# 2. Encapsulation (Data hiding)

**Idea:** Keep data safe by restricting direct access.

### Example:

```javascript
class BankAccount {
  #balance = 0;   // private field

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount();
acc.deposit(1000);
console.log(acc.getBalance()); // 1000
// console.log(acc.#balance); ❌ Error
```

👉 `#balance` cannot be accessed directly.

---

# 3. Inheritance (Reuse code)

**Idea:** One class inherits properties/methods from another.

### Example:

```javascript
class Animal {
  speak() {
    console.log("Animal makes sound");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Dog barks");
  }
}

const d = new Dog();
d.speak(); // inherited
d.bark();
```

👉 `Dog` reuses `Animal` behavior.

---

# 4. Polymorphism (Same method, different behavior)

**Idea:** Same method name behaves differently depending on object.

### Example:

```javascript
class Bird {
  sound() {
    console.log("Bird makes sound");
  }
}

class Sparrow extends Bird {
  sound() {
    console.log("Sparrow chirps");
  }
}

class Crow extends Bird {
  sound() {
    console.log("Crow caws");
  }
}

const birds = [new Sparrow(), new Crow()];

birds.forEach(b => b.sound());
```

👉 Same method `sound()`, different outputs.

---

# 🔥 Bonus: Function Polymorphism (Simple JS style)

JavaScript also supports polymorphism without classes:

```javascript
function add(a, b) {
  return a + b;
}

console.log(add(2, 3));        // 5
console.log(add("Hello ", "JS")); // Hello JS
```

👉 Same function works with different types.

---

# Quick Summary

| Concept       | JavaScript Feature Used         |
| ------------- | ------------------------------- |
| Abstraction   | Classes + private methods       |
| Encapsulation | `#private` fields               |
| Inheritance   | `extends` keyword               |
| Polymorphism  | Method overriding / flexibility |

---

If you want, I can also show:

* Real-world JS examples (like **React components / APIs**)
* Interview-ready short answers
* Visual diagrams for better understanding
