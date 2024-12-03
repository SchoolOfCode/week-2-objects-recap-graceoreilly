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

  if (person.likesChocolate) {
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

console.log (bensPhrases["smallTalk"]);

desiredPleasantry = "farewell";
console.log (bensPhrases[desiredPleasantry]);

let me = {
    firstName: "Grace",
    lastName: "O'Reilly",
    isBootcamper: false,
  };

isBootcamper = true;
console.log(isBootcamper)