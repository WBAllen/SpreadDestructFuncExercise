// Spread & Destructuring with Functions Exercise

// 1a.
const jPDinos = [
    "Velociraptors", 
    "Tyrannosaurus Rex", 
    "Dilophosaurus"
]

// 1b.
function seeDinos(a,...b){
    console.log(a);
    console.log(b);
}
seeDinos("Velociraptors", "Tyrannosaurus Rex", "Dilophosaurus");

// 2a.
const jPCharacters = {
    alanGrant: "Sam Neill",
    ellieSattler: "Laura Dern",
    ianMalcolm: "Jeff Goldblum"
};

// 2b.
seeCharacters = (jPCharacters) => {
    console.log(jPCharacters.ellieSattler);
}
seeCharacters(jPCharacters);

// BONUS
// 3a.
const jurassicParkMovies = [{
    one: "Jurassic Park", 
    two: "The Lost World: Jurassic Park",
    three: "Jurassic Park III"
},
{
    four: "Jurassic World", 
    five: "Jurassic World: Fallen Kingdom", 
    six: "Jurassic World: Dominion"
}];

// 3b.
const seeJPMovies = function([{one, two, three}, {four, five, six}]){
    console.log(one);
    console.log(two);
    console.log(three);
    console.log(four);
    console.log(five);
    console.log(six);
}
seeJPMovies(jurassicParkMovies);