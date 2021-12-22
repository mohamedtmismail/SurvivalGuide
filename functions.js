makeBread(2) // Call still works here

function makeBread(qty) {
  return '🍞'.repeat(qty)
}

const makeBeer = function (qty) {
  return '🍺'.repeat(qty)
}

// Positional
function makeBreakfast(main, side, drink) {
  console.log(arguments)
  return `Breakfast is ${main}, ${side}, and ${drink}.`
}

// Named
function makeLunch(opts) {
  const { main, side, drink } = opts
  return `Lunch is ${main}, ${side}, and ${drink}.`
}

// Rest params
function makeDinner(main, ...args) {
  console.log(main, args)
  return `Dinner includes ${main} and ${args.join('')}.`
}

makeBreakfast('🥞', '🥓', '🥛')

makeLunch({ main: '🥙', side: '🍟', drink: '🥤' })

makeDinner('🍜', '🥘', '🍙', '🥠', '🍑')

// const makeBeer = function beerFun(qty) {
//   return '🍺'.repeat(qty)
// }

const makeWine = (qty) => '🍷'.repeat(qty)

let global = 0
const impure = () => {
  global++
  return global ** 2
}

const pure = (x) => x ** 2

// Anonymous
setTimeout(() => console.log('hello!'), 2000)

// Named
const log = () => console.log('hello')
setTimeout(log, 2000)

// Array Map
;[1, 2, 3, 4].map((v) => v ** 2)

const Homie = (queenCount) => 'Gogo'.repeat(queenCount)

const test = Homie(5)

test

function makeQueen(main, ...args) {
  console.log(main, args)
  return `Dinner includes ${main} and ${args.join('')}.`
}

makeQueen('GoGo', 'Super sayan', '🔥🔥🔥')
