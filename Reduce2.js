const goods = [
  {
    title: 'book',
    amount: 3,
    price: 40,
  },
  {
    title: 'bag',
    amount: 2,
    price: 20,
  },
  {
    title: 'shoe',
    amount: 3,
    price: 60,
  },
  {
    title: 'boxers',
    amount: 5,
    price: 15,
  },
  {
    title: 'glasses',
    amount: 8,
    price: 5,
  },
]

let output = goods.reduce(
  (total, goodsItem) => {
    // to get the total amount
    const { amount, price } = goodsItem
    //to count items
    total.totalItem += amount
    // to get the price we have to multiply the amount with the price
    total.carttotal += amount * price
    return total
  },
  {
    totalItem: 0,
    carttotal: 0,
  }
)

console.log(output)
