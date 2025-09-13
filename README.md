## Questions' Answers are here:


```bash
        1.Answer:

 🔷 Var :
  Var is a  function-scoped. It means the variable is only accessible inside the function where it was declared,
   and not outside of it. And does not matter how many '{}' blocks are inside of that function.
   Can be re-declared inside the same scope without any error. 
    Rarely recommended because it can cause confusing bugs. 

🔷 Let :
    Let is a Block-scoped and it is defines   the boundary by the '{}'.
Can not be redeclared in the same scope.
It use when the variable's value changes. 

 🔷 Const :
      Const is a block-scoped.Can not be redecalared or reassigned.It is used when the variable's value should not change.


    2.Answer:

🔷 forEach() 
When we want to do something for every element then we can forEach() method and will get the desire result.
It designed for side effects. And it is created as a cleaner alternative to a for loop when just want to do something with each element.

Since the purpose is action, not transformation, there is no need to return a new array.That's why its return value is always undefined.
Use cases: Logging values, updating the DOM, modifing an external variable.
ex:
const nums = [1, 2, 3];
let sum = 0;
nums.forEach(num => {
sum += num;
});
console.log(sum); //6

🔷map():
 It gives us a new array of the same size, but transformed. It is unlike forEach(), map() is built for producing a new array.
 The length of the new array will always mache the original.

ex:
 const nums = [1, 2, 3]
 const doubled = nums.map(num => num * 2);
 console.log(doubled); //[2, 4, 6]


🔷filter() :
  When we want a new array, then we can use the filter() and that is gives us back our desired items through a logic.

  It is designed for selection and esigned to test each element. Only keep the ones that pass the condition.
  It returns a new array that may be smaller than the original.
  ex:
  const nums = [1, 2, 3, 4, 5];
 const evens = nums.filter(num =>num % 2 === 0);
 console.log(evens);  //[2, 4]


    3.Answer:
    
 🔹An arrow function is a shorter, cleaner way to write functions in JavaScript. It uses the => (araow) syntax and this is introduced in ES6 (ECMAScript 2015).
  No need to the function keyword.If the body is a single expression, we can omit 'return' and '{}' . It is by default return the result and it called implecit return.
  ex:
  const square = x => x * x;
  console.log(square(4)); //16

  ✅ ex:Traditional Function:
  function add(a, b){
  return a + b ;
  }
 ✅ Arrow Function Equivalent:
  const add = (a, b) => a + b;
  Same result but less code.  

  
    4.Answer:
    
  The Destructuring assignment is a very usefull and important syntax in ES6.That is allow us unpack values from arrays or objects into separate variables in a single and clean line.
  Destructuring lets us pull out data easily instead of accessing values one by one.
  🔹1.Array Destructuring:
  const numbers = [10, 20, 30];
    //Traditional way:
    const a = numbers[0];
    const b = numbers[1];

 //with destructuring:
 const [x, y, z] = numbers;
 console.log(x); //10
 console.log(y); //20
 console.log(z); //30

👉 with skip values:
const [first, , third] = numbers;
console.log(first, third); //10, 30

👉 with default values:
const [p, q, r=100] = [1, 2];
console.log(p, q, r); // 1, 2, 100

👉with dtault plus values:
const [p, q, r=0] = [1, 2, 0]
console.log(p, q, r); //3;

👉with default multiply values:
const [p, q, r=1] = [1, 2, 1];
console.log(p, q, r);  //2;

🔷Object Destructuring:
const person = {name:"Alice", age: 25, city:"London"};

//traditional way:
const name = person.name;
const age = person.age;

//with destructuring:
const { name, age, city } = person;

console.log(name); // Alice
console.log(age); // 25
console.log(city); //London

Rename variable:
const {name: fullName, age: years} = person;
console.log(fullName, years); // Alice 25

with defaule values:
const {country = "UK"} = person;
console.log(country);  //UK

🔷Nasted Destructuring:
We can go deeper inside objects/arrays:

const user = {
id = 1,
profile: {username:"bilkis", email:"bilkis@example.com"}
};

const {profile: {username, email}} = user;

console.log(username); //bilkis
cosole.log(email); //bilkis@example.com

🔷Destructure in Function Parameters:
➡
function greet({name, age}) {
console.log(`Hello, ${name}. You are ${age} years old.`)
}
greet({name:"Alice", age: 25}); // Hello, Alice. You are 25 years old.

So,we use Destructuring because of cleaner and shorter code. Avoids repetitive property or array access.

5.Answer:
 Template literals are a new way of writing string in ES6.
 They use backticks(``) instead of quotes( single ' or duble " ).

 🔷It allows inserting variable or expressions direcly inside a string. 
 Instead of breaking the string and adding variables with '+' , and embed them directly with ${...} inside template literals.

 ex:
 (old way: concatenation)
 const name = "Bilkis";
 const age = 32;
 const message = "My name is" +name+ "and I am" +age+ "years old.";
 console.log(message);

 ex:
 with interpolation or insert directly:
 const message = `My name is ${name} and I am ${age} years old.` ;
 console.log(message);

 ----------------------end----------
