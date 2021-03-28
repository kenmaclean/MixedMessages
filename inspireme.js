/*
  The object of this excersis is to return randomly generated inspirational messages to the user. 
  - Prompt the user to quit or display message in a loop
  - display the message
  - exit the program on request.

  - to run the program
  - Make sure you have Node and NPM installed
  - Run npm install prompt-sync in the terminal

  - To execute type nope inspireme.js

  Todo:
  Make messages better and work together better
  I don't like message builder function calling itselg. I think this is a bug
  Convert messages to a class
  
*/

const messages = {
  _subjects: ["I am ", "I will ", "I "],
  _actions: ["awesome ", "smart ", "hard working ", "luck ", "inspirational ", "motivated ", "great ", "value ", "kind ", "dedicated "],
  _nouns: ["at work.", "at learning.", "at caregiver.", "with people.", "with my team.", "at home.", "with my family."],

  _random_phrase: function(obj){
    return obj[Math.floor(Math.random() * obj.length)];
  },

  _subject: function(){
    return this._random_phrase(this._subjects);
  },

  _action: function(){
    return this._random_phrase(this._actions);
  },

  _noun: function(){
    return this._random_phrase(this._nouns);
  },

  message_builder: () => {
    return messages._subject() + messages._action() + messages._noun();
  },
};

function run(){
  const prompt = require('prompt-sync')();
  let choice = 1;  
  while (choice !== 'q') {
    console.log('Press any key for a nice message or "q" to quit.')
    choice = prompt('>');
    if (choice !== 'q') {
      console.log(messages.message_builder());
    }
  }
}


run();
