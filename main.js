const readlineSync = require('readline-sync');
const Type=require("./Type");
const Pokemon=require("./pokemon");
const Move=require("./Move");

let flamethrower = new Move("Flamethrower", 90);
let fly = new Move("Fly", 90);
let shadowBall = new Move("Shadow Ball", 80);
let sludgeBomb = new Move("Sludge Bomb", 90);
let outrage = new Move("Outrage", 120);
let dragonTail = new Move("Dragon Tail", 60);
let moonblast = new Move("Moonblast", 95);
let psychic = new Move("Psychic", 90);
let bodySlam = new Move("Body Slam", 85);
let crunch = new Move("Crunch", 80);
let hydroPump = new Move("Hydro Pump", 110);
let iceBeam = new Move("Ice Beam", 90);
let darkPulse = new Move("Dark Pulse", 80);
let foulPlay = new Move("Foul Play", 95);
let playRough = new Move("Play Rough", 90);
let shadowClaw = new Move("Shadow Claw", 70);
let blizzard = new Move("Blizzard", 110);
let waterPulse = new Move("Water Pulse", 60);
let solarBeam = new Move("Solar Beam", 120);
let petalDance = new Move("Petal Dance", 120);
let mindfulness = new Move("Mindfulness", 100);
let calmMind = new Move("Calm Mind", 70);
let splash = new Move("Splash", 0);

let pokemon1 = new Pokemon("Charizard", 360, 360, 293, 280, [flamethrower, fly],Type.Fire);
let pokemon2 = new Pokemon("Muk", 414, 414, 339, 273, [shadowBall,sludgeBomb], Type.Poison);
let pokemon3 = new Pokemon("Dragonite", 386, 386, 403, 317, [outrage,dragonTail], Type.Dragon);
let pokemon4 = new Pokemon("Gardevoir", 340, 340, 251, 251, [moonblast,psychic], Type.Fairy);
let pokemon5 = new Pokemon("Snorlax", 524, 524, 350, 251, [bodySlam, crunch], Type.Normal);
let pokemon6 = new Pokemon("Blastoise", 362, 362, 291, 328, [hydroPump,iceBeam], Type.Water);
let pokemon7 = new Pokemon("Umbreon", 394, 394, 251, 350, [darkPulse, foulPlay], Type.Dark);
let pokemon8 = new Pokemon("Gengar", 324, 324, 251, 240, [playRough, shadowClaw], Type.Ghost);
let pokemon9 = new Pokemon("Lapras", 464, 464, 295, 284, [blizzard, waterPulse], Type.Ice);
let pokemon10 = new Pokemon("Venusaur", 364, 364, 289, 291, [solarBeam, petalDance], Type.Grass);
let pokemon11 = new Pokemon("Isabel", 2, 2, 6000, 1, [mindfulness, calmMind],Type.Psychic);
let pokemon12 = new Pokemon("Magikarp", 244, 244, 130, 229, [splash], Type.Water);
let pokemonElegir={pokemon1,pokemon2,pokemon3,pokemon4,pokemon5,pokemon6,pokemon7,pokemon8,pokemon9,pokemon10,pokemon11,pokemon12};
let pokemonJugadorRandom = pokemonElegir[Math.floor(Math.random() * pokemonElegir.length)];
let pokemonJugador = pokemonElegir[pokemonJugadorRandom];
let pokemonRivalRandom;


do {
    pokemonRivalRandom = Math.floor(Math.random() * pokemonElegir.length);
} while (pokemonRivalRandom == pokemonJugadorRandom);

let pokemonRival = pokemonElegir[pokemonRivalRandom];

