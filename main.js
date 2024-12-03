const myHouse = {
    stories: 2,
    parking: false,
    bedrooms: 2,
    garden: false,
    energyRating: "D"
}

const myCar = {
    color: "red",
    wheels: 4,
    powerSteering: true,
    seats: 2,
    milesPerGallon: 20
}

const myFavouriteFilm = {
    title: "The Dark Knight",
    releaseDate: "2008",
    leadActor: "Christian Bale"
}

let person = {
    name: "Ben",
    likesChocolate: false,
  };

  console.log(person.likesChocolate)

let likesChocolate = true;

  if (person.likesChocolate) { //don't need to say person.likesChocolate === true as the value is already boolean
    console.log ("Ben loves chocolate")
  }
  else {
    console.log ("Ben hates chocolate")
  }


let desiredPleasantry = "greeting";

let bensPhrases = {
  greeting: "Well hello there!",
  farewell: "See you in another life, brother",
  smallTalk: "Warm today, isn't it...",
};

console.log (bensPhrases["smallTalk"]); //don't forget to use strings when using square brackets

desiredPleasantry = "farewell"; //when reassigning the value you don't use let
console.log (bensPhrases[desiredPleasantry]);

let me = {
    firstName: "Grace",
    lastName: "O'Reilly",
    isBootcamper: false,
  };

isBootcamper = true;
console.log(isBootcamper)

let communication = {
    success: true,
    payload: {
      message: {
        text: "Please send biscuits!",
        priority: "URGENT",
      },
    },
  };

 

 let communication2 = communication.payload.message.text; //communication is the main object, payload is a property of communication, message is a property of payload and text is a property of message
 console.log (communication2)

 if (communication.payload.message.priority === "URGENT") { // this needs to be a strict equality check, do not use = as this is the assignment operator
    console.log(communication.payload.message.priority)
 }
 else {
    console.log()
 }

 //**multi-layered nexted object**
 let sea = {
    crabs: 50,
    swimmers: {
        daytime: {
            number: 4
        },
        night: {
            number: 0
        },
    },
 };