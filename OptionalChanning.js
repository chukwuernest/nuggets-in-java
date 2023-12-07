const people = [
  {
    name: 'back',
    location: { street: '123 aguda surulere', timeZone: { offSet: '+7:00' } },
  },
  {
    name: 'john',
    location: { street: '13 aguda surulere' },
  },
  {
    name: 'sunny',
    location: {
      street: '3 Apple street surulere',
      timeZone: { offSet: '+2:00' },
    },
  },
]

people.forEach((item) => {
  console.log(item.name)
  //to get the offset value we can use
  console.log(
    (item.location &&
      item.location.timeZone &&
      item.location.timeZone.offSet) ||
      'hello'
  )
  //the optional channing helps us to make this synax easier
  console.log(item?.location?.timeZone?.offSet || 'hello optional channing')
})
// the point where the undefine shows up the || option will help to put in a statment
