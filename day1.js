function yearOfBirth (age){
    let yearOfBirth = 2018 - age;

    return yearOfBirth;
}
function whoAmI (name, age){
    if (age < 0){
        throw new Error("Age cant be negative");
    }
    else{
    let yob = yearOfBirth(age);
    console.log(`Hi, my name is ${name} and I\'m ${age} years old.`);
    console.log(`I was born in ${yob}`)
    }
}

let name = "Rick";
let age = 35;
whoAmI (name, age);