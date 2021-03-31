'use strict';

let score=0;
let userName=prompt("What's your name?");

alert('Welcome '+userName);
function favColor(){

    let favColor=prompt('Do I prefer black?');
    
    switch(favColor.toUpperCase()){ 
        case 'YES':
        console.log('Yes, that\'s right');
        alert ('Yes, that\'s right');
        score++;
        break;
       
        case 'Y':
        console.log('Yes, that\'s right');
        alert ('Yes, that\'s right');
        score++;
        break;
    
        case 'NO':
        console.log('No, that\'s wrong');
        alert ('No, that\'s wrong');
        
        break;
    
        case 'N':
            console.log('No, that\'s wrong');
            alert ('No, that\'s wrong');
            
            break;
    }
}
favColor();

function favFood(){

    let favFood=prompt('Do I prefer Mansaf?');
    
    switch(favFood.toUpperCase()){ 
        case 'YES':
        console.log('Yes, that\'s right');
        alert ('Yes, that\'s right');
        score++;
        break;
       
        case 'Y':
        console.log('Yes, that\'s right');
        alert ('Yes, that\'s right');
        score++;
        break;
    
        case 'NO':
        console.log('No, that\'s wrong');
        alert ('No, that\'s wrong');
        
        break;
    
        case 'N':
            console.log('No, that\'s wrong');
            alert ('No, that\'s wrong');
            
            break;
    }
}

favFood();

let age=prompt('Am I less than 25 years old?');

switch(age.toUpperCase()){ 
    case 'YES':
    console.log('Yes, that\'s right');
    alert ('Yes, that\'s right');
    score++;
    break;
   
    case 'Y':
    console.log('Yes, that\'s right');
    alert ('Yes, that\'s right');
    score++;
    break;

    case 'NO':
    console.log('No, that\'s wrong');
    alert ('No, that\'s wrong');
   
    break;

    case 'N':
        console.log('No, that\'s wrong');
        alert ('No, that\'s wrong');
        
        break;
}

let drivingLicense=prompt('Do I own a driver\'s license?');

switch(drivingLicense.toUpperCase()){ 
    case 'YES':
    console.log('Yes, that\'s right');
    alert ('Yes, that\'s right');
    score++;
    break;
   
    case 'Y':
    console.log('Yes, that\'s right');
    alert ('Yes, that\'s right');
    score++;
    break;

    case 'NO':
    console.log('No, that\'s wrong');
    alert ('No, that\'s wrong');
    
    break;

    case 'N':
        console.log('No, that\'s wrong');
        alert ('No, that\'s wrong');
        
        break;
}

let mood=prompt('Am I nervous fast?');

switch(mood.toUpperCase()){ 
    case 'YES':
    console.log('Yes, that\'s right');
    alert ('Yes, that\'s right');
    score++;
    break;
   
    case 'Y':
    console.log('Yes, that\'s right');
    alert ('Yes, that\'s right');
    score++;
    break;

    case 'NO':
    console.log('No, that\'s wrong');
    alert ('No, that\'s wrong');
    
    break;

    case 'N':
        console.log('No, that\'s wrong');
        alert ('No, that\'s wrong');
        
        break;
}
alert('I guessed number between 0 and 10, Enter the number that I choosed.');
let guessedNumber = null;
let myGuessed=7;
for(let i=0; i<4; i++){
    
        let guessedNumber= prompt('Enter my guessed number.');
        if (myGuessed==guessedNumber){
            alert('You are correct, my guessed number is 7');
            console.log('You are correct, my guessed number is 7');
            score++;
            break;
          }
          else if(guessedNumber<7){
              alert('Your guessed is too low');
              console.log('Your guessed is too low');
          }    
           else{
               alert('Your guessed is too high');
               console.log('Your guessed is too high');
           }
    
}

alert('My guessed number is 7'); 


let daily=['studying' , 'listening to music' , 'playing sports' , 'eating' , 'reading', 'sleeping'];
console.log(daily);

let attempt=6;
hasAttempt: while (attempt){
    let userDaily=prompt('What do you expected that i do daily?');
    attempt=attempt-1;
    for (let i=0; i<daily.length; i++){
        if (userDaily===daily[i]){
            alert('You are correct, I\'m '+userDaily+' every day.');
            score++;
            break hasAttempt;     
        }
    }
    alert('Choose one else.')
}

if (!attempt){
    alert('I\'m '+daily+ ' every day.');
}











/*let userDaily=prompt('What do you expected that i do daily?');

for(let i=0; i<6; i++){
    
        if (userDaily==daily[0]||userDaily==daily[1]||userDaily==daily[2]||userDaily==daily[3]||userDaily==daily[4]||userDaily==daily[5]||userDaily==daily[6]){
        alert('You are correct, I\'m '+userDaily+' every day.');
        console.log('You are correct, I\'m '+userDaily+' every day.');
        score++;
        break;
    }
    else{
        prompt('Choose one else.');
        console.log('Choose one else.');
    }
}*/






alert('Your score is '+score+ ' out of 7.');


alert('Welcome '+userName);

document.write('Welcome '+userName);







