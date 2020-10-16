// const age = 100;

// function go() {
//   const myAge = 200;
//   const hair = 'blonde';
//   console.log(age);
//   console.log(myAge);
//   console.log(hair);
// }

// go();
/*eslint-disable*/

function isCool(name) {
    if (name === 'wes') {
        var cool = true;
    }
    console.log(cool);
    return cool;
}



/*
function isCool2() {
    let cool;


    if (1 === 1) {
        cool = true;
    }
    console.log(cool);
    return true;
}
*/
for (let i = 0; i < 10; i++) {
    console.log(i);
}
//So if we used var here it could cause some errors so inside a block scope {} it's better to use let if reassigning values
//If not then better even const. Otherwise, inside functions better to use var variable as it's function scoped


const dog = 'snickers';

function logDog(dog) {
    console.log(dog);
}

function go() {
    const dog = 'sunny';
    logDog('sunny');
}

go();



function yell() {
    console.log(name.toUpperCase())
}

function sayHi(name) {

    yell();
}


yell();