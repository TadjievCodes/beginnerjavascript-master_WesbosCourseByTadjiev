// Function Definition
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
    // this is the function body
    console.log('Running Calculate Bill!!');
    const total = billAmount + billAmount * taxRate + billAmount * tipRate;
    return total;
}

// Function Call. Or **Run**
const wesTotal = 500;
const wesTaxRate = 0.3;
// const myTotal = calculateBill(wesTotal, wesTaxRate);

// Function Definition
function sayHiTo(firstName) {
    return `Hello ${firstName}`;
}

// const greeting = sayHiTo('Wes');
// console.log(greeting);

function doctorize(name) {
    return `Dr. ${name}`;
}

function yell(name = 'Silly Goose') {
    return `HEY ${name.toUpperCase()}`;
}

const myBill4 = calculateBill(100, undefined, 0.2);
console.log(myBill4);


const myBill5 = calculateBill(1450, 0.13, 0.20);
console.log(myBill5);

const myBill6 = calculateBill(1450); // So we define here billAmount but keep blank taxRate and tipRate as values allready assigned on top so not necessary for us to assign.
console.log(myBill6);