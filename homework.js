// Episode 1

const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

//Output would be "The murderer is Miss Scarlet" because the declareMurderer function references the murderer value from the scenario object.

// Episode 2

const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

//Output is an error because we cannot change the value of a const element

// Episode 3

let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock'; //locally changed within this function only
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

//Output for firstVerdict will be "Mrs.Peacock" because the murderer in the declareMurderer function is assigned within the function locally.
//Output for secondVerdict will be "Professor Plum" because the murderer referenced reflects the variable in the global scope.

// Episode 4

let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard'; //locally changed within this function only
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);

//Output here is "The suspects are Miss Scarlet, Professor Plum, Colonel Mustard" because the suspects are defined in the 
//declareAllSuspects function which has within it a change for suspectThree, thus changing Mrs.Peacock to Colonel Mustard 
//locally when this function is referenced, and "Suspect three is Mrs. Peacock" because, it refers to the suspectThree referenced
//within the global scope.

// Episode 5

const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Kitchen',
  weapon: 'Candle Stick' //newWeapon
};

const changeWeapon = function(newWeapon) {
  scenario.weapon = newWeapon;
}

const declareWeapon = function() {
  return `The weapon is the ${scenario.weapon}.`;
}

changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);

//Output here is "The weapon is the Revolver", because the changedWeapon function has an arguement that changes the weapon key in the
//scenario object to newWeapon, then the function is called with the arguement "Revolver", thus the scenario.weapon changes to Revolver

// Episode 6

let murderer = 'Colonel Mustard'; //Mr.Green //Mrs. White

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

//Output is "The murderer is Mrs. White", because console.log calls on the declareMurderer function which has reassigned the murderer
//variable originally to Mr. Green then finally Mrs.White

// Episode 7

let murderer = 'Professor Plum'; //Mr.Green 

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard'; //Miss Scarlett

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`; //Mr. Green
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

//Output is "The murderer is Mr.Green", because the changeMurderer function reassigned the murderer to Mr Green(the functions within it,
//only changed a new let variable that only exists locally within the plottwist function).


// Episode 8

const scenario = {
  murderer: 'Mrs. Peacock', // Colonel Mustard
  room: 'Conservatory', // Dining room
  weapon: 'Lead Pipe' // Candle stick
};

const changeScenario = function() {
  scenario.murderer = 'Mrs. Peacock';
  scenario.room = 'Dining Room';

  const plotTwist = function(room) {
    if (scenario.room === room) {
      scenario.murderer = 'Colonel Mustard';
    }

    const unexpectedOutcome = function(murderer) {
      if (scenario.murderer === murderer) {
        scenario.weapon = 'Candle Stick';
      }
    }

    unexpectedOutcome('Colonel Mustard');
  }

  plotTwist('Dining Room');
}

const declareWeapon = function() {
  return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);

//Output is "The weapon is Candle Stick", because the changeScenario function changed the murderer and room values, then the 
//plotTwist function changed the murderer to Colonel Mustard, then the unexpectedOutcome function changed the weapon to Candle Stick.
//The whole function was called when assinged to the verdict variable

// Episode 9

let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock'; //new let variable
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

//Output is "The murderer is Professor Plum", because the if statement assigns an essentially new variable different from the original
//murderer variable, which is not the one refrenced in the declareMurderer function