const cart = [
    {
        'name': 'infinix',
         'price': 3000,
         'amount': 1,
    },

    {
        'name': 'hair',
         'price': 6000,
         'amount': 3,
    },
    {
        'name': 'hammer',
         'price': 300,
         'amount': 2,
    },

    {
        'name': 'infinixHot',
         'price': 8000,
         'amount': 1,
    },

    {
        'name': 'infinixHot',
         'price': 8000,
         'amount': 2,
    }
]

const total = cart.reduce((total, cartItem) => {
    total.totalItems += cartItem.amount;
    total.totalPrice += cartItem.amount * cartItem.price;
    return total;
},{
   "totalItems": 0,
   "totalPrice": 0 
})

console.log(total)