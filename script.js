//Declare variables
let myName = "Katie Holland";
let age = 31;
let birthday = "February 10";
let detroitGC = false;
let lifeEvents = ["I was born in Detroit", "I went to MSU" , "I like to travel.", "I\m a student in the front-end bootcamp."];
//write if/else statement that runs on of two console.log methods
if (detroitGC) {
    console.log(`My name is ${myName} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on my ${birthday}.`);
}else (!detroitGC); {
    console.log(`My name is ${myName} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`);
}



//write a for loop that starts at 0 and iterates by increments of 1 while i < length of life events array
for (let i= 0; i < lifeEvents.length; i++) {
    console.log(lifeEvents[i]);
}

//initialize a variable named counter and set to 0
let counter = 0;
//write a loop that loops while true. Use a random inteeger between 1 and 10
//write an if/else statment with two conditions if random number is =5 or not 5
while (true) {
    let randomNumber = Math.floor(Math.random() * 11); 
    if(randomNumber!==5) {
    counter ++;
    console.log(`${randomNumber} !==5`);
}   else {
    counter ++; 
    console.log(`5===5  It took ${counter} iterations to randomly generate the number 5.`);
    break;
}
}