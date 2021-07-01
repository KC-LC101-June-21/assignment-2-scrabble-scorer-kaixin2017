// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
}

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log("Let's play some scrabble! Enter a word:");
   word = input.question('please enter a word to score:')
   return word;
};
//console.log(initialPrompt());

// simpleScore: Define a function that takes a word as a parameter and returns a numerical score. Each letter within the word is worth 1 point.
let simpleScore;
simpleScore = function(word){
  let score = 0;
  //let score = word.length;
  word = word.toUpperCase();
  for (let i = 0; i < word.length; i++) {
  score ++;
  }
  return `Score for ${word} is: ${score} `;
};

//console.log(simpleScore('coconut'));
//takes a word as a parameter
//returns a numerical score
//Each letter within the word is worth 1 point
let vowelBonusScore;
//Define a function that takes a word as a parameter and returns a score. Each vowel within the word is worth 3 points, and each consonant is worth 1 point.
//a function that takes a word as a parameter
//returns a score
//Each vowel within the word is worth 3 points, and each consonant is worth 1 point.
vowelBonusScore = function(word){
  word = word.toUpperCase();
  score = 0;
  let vowels = ['A','O','E','I','U'];
  for (i=0; i< word.length; i++){
    if (vowels.includes(word[i])){
      score += 3;
    } else {
      score ++;
    }
  }
  return score = `score for ${word} is: ${score} `;
}
//console.log(vowelBonusScore('coconut'));

let scrabbleScore;
scrabbleScore = function(word){
  word = word.toLowerCase();
	score = 0;
	for (let i = 0; i < word.length; i++) {
    for (let item in newPointStructure){
      if (item.includes(word[i])) {
		  score += newPointStructure[word[i]];
	    }
    } 
	}
	return score= `score for ${word} is: ${score} `;
};



const scoringAlgorithms = [
   {name: 'Simple',
   description: 'One point per character',
   scoringFunction:simpleScore},
   {name:'Vowel Bonus',
   description: 'Vowels are worth 3 points',
   scoringFunction:vowelBonusScore},
   {name:'Scrabble',
   description:'Uses scrabble point system',
   scoringFunction:scrabbleScore}
];

//console.log("scoringFunction result: ", scoringAlgorithms[0].scoringFunction("coconut"));

// Finish writing the scoringAlgorithms array. It should be populated with three objects, one for each of the three scoring options. Each object should contain three keys: name, description, and scoringFunction.
//populated with three objects
//Each object should contain three keys: name, description, and scoringFunction
// let scrabbleScorer = {
//   description : 'oldPointMethod',
//   scoringFunction : 'oldScrabbleScorer'
// }
// let simpleScorer = {
//   description : 'simplePointMethod',
//   scoringFunction : 'simpleScore'
// }
// let vowelBonusScorer = {
//   description : 'vowelBonusPointMethod',
//   scoringFunction : 'vowelBonusScore'
// }
// scoringAlgorithms.push(scrabbleScorer);
// scoringAlgorithms.push(simpleScorer);
// scoringAlgorithms.push(vowelBonusScorer);
//console.log(scoringAlgorithms);

// scoringAlgorithms = [
//   {name: 'scrabbleScorer',
//    description: 'oldPoint',
//    scoringFunction:'oldScrabbleScorer'},
//   {name: 'simpleScorer',
//    description: 'simplePoint',
//    scoringFunction:'simpleScore'},
//   {name: 'vowelBonusScorer',
//    description: 'bonusVowelPoint',
//    scoringFunction:'vowelBonusScore'}
// ]
function scorerPrompt() {
  scorerChoice = input.question(`Which scoring algorithm would you like to use? \n\n 0 - ${scoringAlgorithms[0].name}: ${scoringAlgorithms[0].description} \n 1 - ${scoringAlgorithms[1].name}: ${scoringAlgorithms[1].description} \n 2 - ${scoringAlgorithms[2].name}: ${scoringAlgorithms[2].description} \n`)
  scorerChoice = Number(scorerChoice);
  if (scorerChoice === 0){
    return scoringAlgorithms[0].scoringFunction(word);
    //return simpleScore(word);
  } else if (scorerChoice === 1) {
    return scoringAlgorithms[1].scoringFunction(word);
    //return vowelBonusScore(word);
  } else {
    return scoringAlgorithms[2].scoringFunction(word);
    //return oldScrabbleScorer(word);
  }   
}

//console.log(scorerPrompt());


function transform(oldPointStructure) {
  let newPointStructure = {};
  for (let pointValue in oldPointStructure){
    for (let i in oldPointStructure[pointValue]) {
       newPointStructure[oldPointStructure[pointValue][i].toLowerCase()] = Number(pointValue);
    }
  }
  return newPointStructure;
};
console.log(transform(oldPointStructure));
let newPointStructure = transform(oldPointStructure);

function runProgram() {
  initialPrompt();
//   //  //Call scorerPrompt() inside of runProgram() so that the program asks the user for a scoring algorithm after prompting for a word. 
//   //  //Use the scoring object returned from scorerPrompt() to score the user's word and let the user know what score their word receives.

  console.log(scorerPrompt());
  

}



// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

