//rest operator ...
//gathers/collects item
//destructing,functions
//placement important,careful with the same name
//rest when declare fuction,spread when invoke the fuction

//Arrays
const fruit = ['mango', 'orange', 'apple', 'grape']
const [first] = fruit
console.log(first)
// note using the ... in rest help to get other details from the array
const [ja, ...restOfTheFruit] = fruit
console.log(ja, ...restOfTheFruit)
//you can call it any name but do not forget the ...name,else it will appear as an Array
const specificFruint = restOfTheFruit.find((fruit) => fruit === 'grape')
console.log(specificFruint)

//object
const person = {
  firstName: 'Mike',
  lastName: 'Ernest',
  city: 'Lagos',
  country: 'Nigeria',
}
const { firstName, ...others } = person
console.log(firstName, others)
//note const {...rest,firstname} will not work
//function
