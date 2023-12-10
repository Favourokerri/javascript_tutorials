let pizza;
const order = () => {
    console.log('order the piza');
    setTimeout (() => {
        pizza = 'pizza';
        console.log('delivering. pizza is ready');
    }, 2000);
}

order();
console.log(`eat ${pizza}`);