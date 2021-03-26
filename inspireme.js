/*
  DocString:

*/

const messages = {
  _subjects: ["I am ", "I will ", "I "],
  _actions: ["awesome", "smart", "hard working", "luck", "inspirational", "motivated", "great", "value", "kind", "dedicated"],
  _nouns: ["at work", "at learning", "at caregiver", "with people", "with my team", "at home", "with my family"],

  get subject(){

    random_subject = Math.floor(Math.random(this._subjects.length()));
    return this.random_subject;
  },

  get action(){
    random_action = Math.floor(Math.random(this._actions.length()));
    return this.random_action;
  },

  get noun(){
    random_noun = Math.floor(Math.random(this._nouns.length()));
    return this.random_noun;
  },

  message_builder: () => {
    message = this.get
  },

};

