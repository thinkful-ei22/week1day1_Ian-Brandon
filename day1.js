
function yearOfBirth (age){
    let yearOfBirth = 2018 - age;

    return yearOfBirth;
}
function whoAmI (name, age){
    if ((!name) || (!age)){
        console.error('Arguments not valid');
    }
    else if (typeof(age !== Number)){
        throw new Error("age is not a number")
    }
    else if (age < 0){
        throw new Error("Age cant be negative");
    }
    else{   
    let yob = yearOfBirth(age);
    console.log(`Hi, my name is ${name} and I\'m ${age} years old.`);
    console.log(`I was born in ${yob}`)
    }
}
let age = "35";
let name = null;

whoAmI (name, age);