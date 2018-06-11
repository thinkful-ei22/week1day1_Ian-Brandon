
function yearOfBirth (age){
    let yearOfBirth = 2018 - age;

    return yearOfBirth;
}

const whoAmI  = function(name, age){
    if ((!name) || (!age)){
        console.error('Arguments not valid');
    }
<<<<<<< HEAD
    else if (typeof age !== "number"){
        throw new Error("age is not a number")
    }
=======
>>>>>>> b20a74a7635580b4edfe844107d4c759096447b3
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
<<<<<<< HEAD
let age = 35;
let name = null;

whoAmI ("bob", 35);
=======

let name = 'Brandon';
let age = 45;
whoAmI (name, age);
>>>>>>> b20a74a7635580b4edfe844107d4c759096447b3
