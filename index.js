/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here
const habitats = [];
const PROPS = [
  "species",
  "name",
  "gender",
  "legs",
  "hands",
  "saying",
  "friends",
];
const SPECIES = { DOG: "dog", CAT: "cat", HUMAN: "human" };
const GENDER = { MALE: "male", FEMALE: "female" };
class Habitat {
  friends=[];
  constructor (species,name,gender,legs/*,hands,*/,saying){

  this.species = species;
  this.name = name;
  this.gender = gender;
  this.legs = legs;
  //this.hands = hands;
  this.saying = saying;

  }

addFriend (habitat){
  if (!this.friends.includes (habitat)){
    this.friends.push(habitat);
  }
  if (!habitat.friends.includes (this)){
    habitat.friends.push (this);
  }
}

toString (){

      let info = [this.species, this.name, this.gender, this.legs,'0', this.saying].join("; ");
      if (this.friends.length > 0) {
        info += "; ";
        let friendList = this.friends.reduce((list, friend) => {
          list.push(friend.species + " " + friend.name);
          return list;
        }, []);

        info += friendList.join(", ");
      }
      return info;
    }
}


class Animal extends Habitat
{
  
constructor (species,name,gender,legs,saying)
  {
    super(species,name,gender,legs,saying)
  }

}

class Human extends Habitat{
  constructor (name,gender,legs,hands,saying){
  super(SPECIES.HUMAN,name, gender,legs,saying);
  this.hands = hands;
  
  }
  
toString (){

      let info = [this.species, this.name, this.gender, this.legs,this.hands, this.saying].join("; ");
      if (this.friends.length > 0) {
        info += "; ";
        let friendList = this.friends.reduce((list, friend) => {
          list.push(friend.species + " " + friend.name);
          return list;
        }, []);

        info += friendList.join(", ");
      }
      return info;
    }
}

class Dog extends Animal {
constructor (name,gender,legs,saying){
  super (SPECIES.DOG,name,gender,legs,saying)

}
}

class Cat extends Animal {
constructor (name,gender,legs,saying){
  super (SPECIES.CAT,name,gender,legs,saying)

}
}



const dog = new Dog("Sharik", GENDER.MALE, 4, "gav-gav!");
const cat = new Cat("Murka", GENDER.FEMALE, 4, "Myau");
const man = new Human(
  "Igor",
  GENDER.MALE,
  2,
  2,
  "Hello, everebody!"
);

const woman = new Human(
  "Nata",
  GENDER.FEMALE,
  2,
  2,
  "Hi. My name is Nata"
);

const catWoman = new Human(
  "Margo",
  GENDER.FEMALE,
  2,
  2,
  cat.saying
);


dog.addFriend(cat);
dog.addFriend(cat);
man.addFriend(cat);
man.addFriend(woman);
habitats.push(dog, cat, man, woman, catWoman);
// ======== OUTPUT ========
habitats.forEach((habitat) => {
  print(habitat);
});

/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */

/* Print examples:
   print('ABC');
   print('<strong>ABC</strong>');
   print('<strong>ABC</strong>', 'div');

   print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
   */
