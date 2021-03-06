// 2-Factory Function
function createCircle(radius) {
	return {
		radius, //radius: radius,
		draw() {
			console.log('draw');
		}
	};
}
// return object
const myCircle = createCircle(1);
console.log(myCircle);

// 3-Constructor Functions - use Pascal Notation
function Circle(radius) {
	this.radius = radius;
	this.draw = function() {
		console.log('draw');
	};
}
// new keywords=  create empty object, set this to point of the object, return the object from the function
// return object with this keyword
const another = new Circle(1);
console.log(another);

// 4-Dynamic Nature of Objects
const circle2 = {
	radius: 1
};
circle2.color = 'yellow';
circle2.draw = function() {};

delete circle2.color;
delete circle2.radius;
console.log(circle2);

// 5-Constructor Property
let a = {}; // let x = new Object();
// every object has constructor property

// 6-Functions are Objects - 이해필요
console.log(Circle.name);
console.log(Circle.constructor);

function Circle(radius) {
	this.radius = radius;
	this.draw = function() {
		console.log('draw');
	};
}
Circle.call({}, 1);

const another2 = new Circle(1);

// 7-Value, Reference Types
// object is not store in the variable, both x and y pointing to the same object
let x = { value: 10 };
let y = x;

x.value = 20;

// Primitives are copied by their value,
// Objects are copied by their reference

let number = 10;
let obj = { value: 10 };
function increase(obj) {
	obj.value++; // this is independent, after this function, this is go out of the scope
}
increase(obj);
console.log(obj);

// 8-Enumerating Properties of an Object - 이해필요
const circle = {
	radius: 1,
	draw() {
		console.log('draw');
	}
};

for (let key in circle) {
	console.log(key, circle[key]);
}

// for of only use such as array and map..
// object is not iterable
// object is built in constructor function
// all functions are object

for (let key of Object.keys(circle)) {
	console.log(key);
}

for (let entry of Object.entries(circle)) {
	console.log(entry);
}

if ('radius' in circle) console.log('yes');

// 9-Cloning an Object
const circle = {
	radius: 1,
	draw() {
		console.log('draw');
	}
};

// old way
const another = {};
for (let key in circle9) {
	another[key] = circle[key];
}

// new way
const another = Object.assign({ color: 'yellow' }, circle);
const another = { ...circle };
console.log(another);

// 10-Garbage Collection 메모리 관리

// 11-Math

// 12-String
// String primitive
const message = 'This is my\n first message';
// String object
const another = new String('hi');
message.split(' ');

// 13-Templeate Literal

const name = 'John';
const message = 'Hi' + name + ',\n';

const another = `Hi ${name} ${2 + 3} glad to see you `;

// 14-Date
const now = new Date();
