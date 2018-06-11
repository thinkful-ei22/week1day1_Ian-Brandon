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


function decode (word) {
    
    if (word.charAt(0) === 'a'){
    return word.charAt(1);
    }
    else if (word.charAt(0) === 'b') {
        return word.charAt(2);
    }
    else if (word.charAt(0) === 'c') {
        return word.charAt(3);
    }
    else if (word.charAt(0) === 'd'){
        return word.charAt(4);
        }
        else {
            return ' ';
        }
}

console.log (decode('craft') + decode('block') + decode('argon') + decode('meter') + decode ('bells') + decode('brown') 
+ decode('croon') + decode('droop'));

function howManyDays (month, leapYear){
    if (!month){
        throw new Error("Must provide a valid month.");
    }
    else if ((month === 'February') && (leapYear === true)){
        console.log("February has 29 days!");
    }
    else{
        switch(month){
            case 'January':
            case 'March':
            case 'May':
            case 'July':
            case 'August':
            case 'October':
            case 'December':
                console.log(`${month} has 31 days!`);
                break;
            case 'April':
            case 'June':
            case 'September':
            case 'November':
                console.log(`${month} has 30 days!`);
                break;
            case 'February':
                console.log(`February has 28 days!`)
                break;
        }
    }
}

howManyDays("February", true);

function rockPaperScissors (num){
    if ((num < 1) || (num > 3)){
        console.error("Invalid Entry. Please choose a number between 1 and 3.");
    }
    else{
    let playerChoice = num;
    const randomNo = Math.floor(Math.random() *3) +1;

    if (playerChoice === 1){
        if (randomNo ===1) {
            console.log ("It's a tie!");
        }
        else if (randomNo === 2){
            console.log ("You lose :(");
        }
        else if (randomNo === 3){
            console.log ("You win :)");
        }
    }
    else if (playerChoice === 2){
        if (randomNo ===2) {
            console.log ("It's a tie!");
        }
        else if (randomNo === 3){
            console.log ("You lose :(");
        }
        else if (randomNo === 1){
            console.log ("You win :)");
        }
    }
    else if (playerChoice === 3){
        if (randomNo ===3) {
            console.log ("It's a tie!");
        }
        else if (randomNo === 1){
            console.log ("You lose :(");
        }
        else if (randomNo === 2){
            console.log ("You win :)");
        }
    }
return rockPaperScissors;
    }
}
    
    rockPaperScissors(2);
