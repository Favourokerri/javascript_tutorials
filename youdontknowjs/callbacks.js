let pizza;

function orderPizza(callback) {
    setTimeout(()=>{
        console.log('preparing pizza');
        console.log('delivered');
        pizza='pizzaaaaa'
        callback(pizza);
    },2000)
}


function pizzaReady() {
    console.log(`Eat the fucking ${pizza}`);
}

orderPizza(pizzaReady);
console.log('continue with your life man');