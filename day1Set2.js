function jediName (firstName, lastName){

    let jediName = lastName.substr(0, 3) + firstName.substr(0, 2);

    return jediName;
}

let firstName = 'Beyonce';
let lastName = 'Knowles';

console.log(jediName(firstName, lastName));

function beyond (num){
    if(isFinite(num) !== true && num > 0){
         console.log("To infinity");
    }
    else if (isFinite(num) !== true && num < 0){
         console.log("to negative infinity");
    }
    else if (isFinite(num) == true) {
         console.log("And Beyond");
    }
    else if (num === 0){
         console.log("Staying home");
    }
}

beyond (-Infinity);