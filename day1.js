
function yearOfBirth (age){
    let yearOfBirth = 2018 - age;

    return yearOfBirth;
}

const whoAmI  = function(name, age){
    if ((!name) || (!age)){
        console.error('Arguments not valid');
    }
    else if (age < 0){
        throw new Error("Age cant be negative");
    }
    else if (typeof age !== 'number'){
        throw new Error("age is not a number")
    }
    else{   
    let yob = yearOfBirth(age);
    console.log(`Hi, my name is ${name} and I\'m ${age} years old.`);
    console.log(`I was born in ${yob}`)
    }
}

let name = 'Brandon';
let age = 45;
whoAmI (name, age);