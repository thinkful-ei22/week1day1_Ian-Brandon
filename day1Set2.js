function jediName (firstName, lastName){

    let jediName = lastName.substr(0, 3) + firstName.substr(0, 2);

    return jediName;
}

let firstName = 'Beyonce';
let lastName = 'Knowles';

console.log(jediName(firstName, lastName));