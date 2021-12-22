// literal
const dog = {
  name: 'doggy',
  age: 5,
  colour: 'blue',
}

dog['name'] = 'brownie'
console.log(dog['name'])
// constructor
const cat = new Object()

// static method
const horse = Object.create({})

let hello
let world

// Old way 💩
// const obj = {
//   hello: hello,
//   world: world,
// }

// Modern way 👍
const obj = {
  hello,
  world,
}

// const x = 'howdy'

// const obj = {
//   [x]: 23,
// }

obj.howdy // 23

const original = {}

const x = original
const y = original

x === y // true
x === {} // false

x.hello = 'world'

original.hello // world
y.hello // world

// const original = {
//   hello: 'world',
// }

const clone = Object.assign({}, original)

// clone === original // false

original.hello = 'changed!'

clone.hello // world (did not change)

// const clone = Object.assign({}, original)

// const sugar = { ...original }

// const sugar = { ...original, hola: 'mundo' }
