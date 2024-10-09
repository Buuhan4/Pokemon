const readlineSync = require('readline-sync');
const { Type, tipoEfectivo } = require('./Type');
const Pokemon = require("./Pokemon");
const Move = require("./Move");

let flamethrower = new Move("Flamethrower", 90, 80, Type.Fire);
let fly = new Move("Fly", 90, 95, Type.Flying);
let shadowBall = new Move("Shadow Ball", 80, 90, Type.Ghost);
let sludgeBomb = new Move("Sludge Bomb", 90, 95, Type.Poison);
let outrage = new Move("Outrage", 120, 90, Type.Dragon);
let dragonTail = new Move("Dragon Tail", 60, 95, Type.Dragon);
let moonblast = new Move("Moonblast", 95, 90, Type.Fairy);
let psychic = new Move("Psychic", 90, 90, Type.Psychic);
let bodySlam = new Move("Body Slam", 85, 95, Type.Normal);
let crunch = new Move("Crunch", 80, 90, Type.Dark);
let hydroPump = new Move("Hydro Pump", 110, 80, Type.Water);
let iceBeam = new Move("Ice Beam", 90, 95, Type.Ice);
let darkPulse = new Move("Dark Pulse", 80, 95, Type.Dark);
let foulPlay = new Move("Foul Play", 95, 90, Type.Dark);
let playRough = new Move("Play Rough", 90, 90, Type.Fairy);
let shadowClaw = new Move("Shadow Claw", 70, 100, Type.Ghost);
let blizzard = new Move("Blizzard", 110, 70, Type.Ice);
let waterPulse = new Move("Water Pulse", 60, 95, Type.Water);
let solarBeam = new Move("Solar Beam", 120, 90, Type.Grass);
let petalDance = new Move("Petal Dance", 120, 85, Type.Grass);
let mindfulness = new Move("Mindfulness", 100, 35, Type.Psychic);
let calmMind = new Move("Calm Mind", 0, 100, Type.Psychic);
let splash = new Move("Splash", 0, 100, Type.Normal);
let tackle = new Move("Tackle", 40, 100, Type.Normal);
let thunderbolt = new Move("Thunderbolt", 90, 90, Type.Electric);
let thunder = new Move("Thunder", 110, 70, Type.Electric);
let closeCombat = new Move("Close Combat", 120, 90, Type.Fighting);
let karateChop = new Move("Karate Chop", 50, 90, Type.Fighting);
let earthquake = new Move("Earthquake", 100, 90, Type.Ground);
let dig = new Move("Dig", 80, 95, Type.Ground);
let stoneEdge = new Move("Stone Edge", 100, 80, Type.Rock);
let rockSlide = new Move("Rock Slide", 75, 90, Type.Rock);
let ironHead = new Move("Iron Head", 80, 90, Type.Steel);
let flashCannon = new Move("Flash Cannon", 90, 90, Type.Steel);
let xScissor = new Move("X-Scissor", 80, 90, Type.Bug);
let bugBuzz = new Move("Bug Buzz", 90, 90, Type.Bug);
let hurricane = new Move("Hurricane", 110, 70, Type.Flying);
let aerialAce = new Move("Aerial Ace", 60, 90, Type.Flying);
let leafBlade = new Move("Leaf Blade", 90, 90, Type.Grass);
let razorLeaf = new Move("Razor Leaf", 55, 95, Type.Grass);
let frostBreath = new Move("Frost Breath", 60, 90, Type.Ice);
let iceShard = new Move("Ice Shard", 40, 90, Type.Ice);

let pokemon1 = new Pokemon("Charizard", 12, 12, 6, 6, [flamethrower, fly], Type.Fire, Math.floor(Math.random() * 100) + 1);
let pokemon2 = new Pokemon("Muk", 13, 13, 7, 6, [shadowBall, sludgeBomb], Type.Poison, Math.floor(Math.random() * 100) + 1);
let pokemon3 = new Pokemon("Dragonite", 13, 13, 7, 7, [outrage, dragonTail], Type.Dragon, Math.floor(Math.random() * 100) + 1);
let pokemon4 = new Pokemon("Gardevoir", 12, 12, 6, 6, [moonblast, psychic], Type.Fairy, Math.floor(Math.random() * 100) + 1);
let pokemon5 = new Pokemon("Snorlax", 18, 18, 7, 6, [bodySlam, crunch], Type.Normal, Math.floor(Math.random() * 100) + 1);
let pokemon6 = new Pokemon("Blastoise", 12, 12, 6, 7, [hydroPump, iceBeam], Type.Water, Math.floor(Math.random() * 100) + 1);
let pokemon7 = new Pokemon("Umbreon", 13, 13, 6, 7, [darkPulse, foulPlay], Type.Dark, Math.floor(Math.random() * 100) + 1);
let pokemon8 = new Pokemon("Gengar", 12, 12, 6, 6, [playRough, shadowClaw], Type.Ghost, Math.floor(Math.random() * 100) + 1);
let pokemon9 = new Pokemon("Lapras", 13, 13, 7, 6, [blizzard, waterPulse], Type.Ice, Math.floor(Math.random() * 100) + 1);
let pokemon10 = new Pokemon("Venusaur", 12, 12, 6, 6, [solarBeam, petalDance], Type.Grass, Math.floor(Math.random() * 100) + 1);
let pokemon11 = new Pokemon("Isabel", 2, 2, 6000, 1, [mindfulness, calmMind], Type.Psychic, 10);
let pokemon12 = new Pokemon("Magikarp", 11, 11, 5, 6, [splash, tackle], Type.Water, Math.floor(Math.random() * 100) + 1);
let pokemon13 = new Pokemon("Pikachu", 12, 12, 6, 6, [thunderbolt, thunder], Type.Electric, Math.floor(Math.random() * 100) + 1);
let pokemon14 = new Pokemon("Machamp", 13, 13, 7, 6, [closeCombat, karateChop], Type.Fighting, Math.floor(Math.random() * 100) + 1);
let pokemon15 = new Pokemon("Donphan", 13, 13, 7, 7, [earthquake, dig], Type.Ground, Math.floor(Math.random() * 100) + 1);
let pokemon16 = new Pokemon("Golem", 12, 12, 7, 7, [stoneEdge, rockSlide], Type.Rock, Math.floor(Math.random() * 100) + 1);
let pokemon17 = new Pokemon("Metagross", 15, 15, 12, 12, [ironHead, flashCannon], Type.Steel, Math.floor(Math.random() * 100) + 1);
let pokemon18 = new Pokemon("Scizor", 12, 12, 7, 7, [xScissor, bugBuzz], Type.Bug, Math.floor(Math.random() * 100) + 1);
let pokemon19 = new Pokemon("Pidgeot", 12, 12, 6, 6, [hurricane, aerialAce], Type.Flying, Math.floor(Math.random() * 100) + 1);
let pokemon20 = new Pokemon("Sceptile", 12, 12, 7, 6, [leafBlade, razorLeaf], Type.Grass, Math.floor(Math.random() * 100) + 1);
let pokemon21 = new Pokemon("Mamoswine", 13, 13, 7, 6, [frostBreath, iceShard], Type.Ice, Math.floor(Math.random() * 100) + 1);

let pokemonElegir = [pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6, pokemon7, pokemon8, pokemon9, pokemon10, pokemon11, pokemon12, pokemon13, pokemon14, pokemon15, pokemon16, pokemon17, pokemon18, pokemon19, pokemon20, pokemon21];

let nombreEntrenadorPokemon;
let nombreEntrenadorRival = "Ash";

combate();


function combate() {

    nombreEntrenadorPokemon = readlineSync.question("Ingrese su nombre de entrenador Pokemon: ");

    let bucle = true;

    while (bucle) {
        console.log("Elige un nivel de juego:")
        console.log("1.Combate 1v1")
        console.log("2.Combate 6v6")
        console.log("3.Salir")

        let eleccionCombate = readlineSync.questionInt("");
        switch (eleccionCombate) {
            case 1:
                combateUnoContraUno();
                break;

            case 2:
                combateSeisContraSeis();
                break;

            case 3:
                console.log("Hasta la proxima")
                bucle = false;
                break;
        }
    }
}


function combateUnoContraUno() {

    let pokemonJugadorRandom = Math.floor(Math.random() * pokemonElegir.length);
    let pokemonJugador = pokemonElegir[pokemonJugadorRandom];
    pokemonJugador.escalarEstadisticas();

    let pokemonRivalRandom;

    do {
        pokemonRivalRandom = Math.floor(Math.random() * pokemonElegir.length);
    } while (pokemonRivalRandom == pokemonJugadorRandom);

    let pokemonRival = pokemonElegir[pokemonRivalRandom];
    pokemonRival.escalarEstadisticas();

    let limitarCuracionJugador = false;
    let limitarCuracionRival = false;

    while (pokemonJugador.hpactual > 0 && pokemonRival.hpactual > 0) {

        console.log("\n====== BATALLA POKÉMON ======\n");
        console.log(`${nombreEntrenadorPokemon}: ${pokemonJugador.nombre} (Nivel: ${pokemonJugador.nivel})`);
        console.log(`Tipo: ${pokemonJugador.tipo}`);
        console.log(`HP: ${pokemonJugador.hpactual.toFixed(0)} / ${pokemonJugador.hpmaximo}`);
        console.log("\nVS\n");
        console.log(`${nombreEntrenadorRival}: ${pokemonRival.nombre} (Nivel: ${pokemonRival.nivel})`);
        console.log(`Tipo: ${pokemonRival.tipo}`);
        console.log(`HP: ${pokemonRival.hpactual.toFixed(0)} / ${pokemonRival.hpmaximo}`);
        console.log("\n===========================\n");


        let eleccion = readlineSync.questionInt("1.Atacar 2.Curarse ");

        console.log(" ");
        console.log(" ");
        console.log(" ");
        console.log(" ");

        switch (eleccion) {
            case 1:
                console.log("Movimientos disponibles:");

                for (let i = 0; i < pokemonJugador.movimientos.length; i++) {
                    console.log(`${i + 1}. ${pokemonJugador.movimientos[i].nombreMov} (Tipo: ${pokemonJugador.movimientos[i].tipo}, Poder: ${pokemonJugador.movimientos[i].poderMov}, Precision: ${pokemonJugador.movimientos[i].precision}%)`);
                }

                let eleccionAtaque = readlineSync.questionInt("Elige un ataque: ");
                console.log(" ");
                console.log(" ");
                console.log(" ");
                console.log(" ");


                while (eleccionAtaque < 1 || eleccionAtaque > pokemonJugador.movimientos.length) {
                    console.log("Seleccion invalida. Elige un numero valido.");
                    eleccionAtaque = readlineSync.questionInt("Elige un ataque: ");
                }

                let movimientoJugador = pokemonJugador.movimientos[eleccionAtaque - 1];
                let cambiarAtacante = true;
                pokemonJugador.ataquePokemon(pokemonJugador, pokemonRival, cambiarAtacante, movimientoJugador);
                break;

            case 2:

                if (!limitarCuracionJugador) {
                    let cambiarCurador = true;
                    pokemonJugador.curarse(cambiarCurador);
                    limitarCuracionJugador = true;
                } else {
                    console.log("¡Ya has usado tu curacion! Elige otra accion.");
                    continue;
                }
                break;
        }

        if (pokemonRival.hpactual <= 0) {
            console.log(`¡${pokemonRival.nombre} ha sido derrotado!`);
            break;
        }

        let eleccionMaquina = Math.floor(Math.random() * 2) + 1;

        switch (eleccionMaquina) {
            case 1:
                let movimientoMaquina = pokemonRival.movimientos[Math.floor(Math.random() * pokemonRival.movimientos.length)];
                cambiarAtacante = false;
                pokemonRival.ataquePokemon(pokemonRival, pokemonJugador, cambiarAtacante, movimientoMaquina);
                break;

            case 2:
                if (!limitarCuracionRival) {

                    let cambiarCurador = false;
                    let curacionIA = pokemonRival.curarse(cambiarCurador);

                    if (curacionIA) {
                        let movimientoMaquina = pokemonRival.movimientos[Math.floor(Math.random() * pokemonRival.movimientos.length)];
                        cambiarAtacante = false;
                        pokemonRival.ataquePokemon(pokemonRival, pokemonJugador, cambiarAtacante, movimientoMaquina);
                    } else {
                        limitarCuracionRival = true;
                    }

                } else {
                    let movimientoMaquina = pokemonRival.movimientos[Math.floor(Math.random() * pokemonRival.movimientos.length)];
                    cambiarAtacante = false;
                    pokemonRival.ataquePokemon(pokemonRival, pokemonJugador, cambiarAtacante, movimientoMaquina);
                }
                break;

        }

        if (pokemonJugador.hpactual <= 0) {
            console.log(`¡${pokemonJugador.nombre} ha sido derrotado!`);
            break;
        }

    }

    console.log("\n====== BATALLA POKÉMON ======\n");
    console.log(`${nombreEntrenadorPokemon}: ${pokemonJugador.nombre}`);
    console.log(`HP: ${pokemonJugador.hpactual.toFixed(0)} / ${pokemonJugador.hpmaximo}`);
    console.log("\nVS\n");
    console.log(`${nombreEntrenadorRival}: ${pokemonRival.nombre}`);
    console.log(`HP: ${pokemonRival.hpactual.toFixed(0)} / ${pokemonRival.hpmaximo}`);
    console.log("\n===========================\n");

}


function combateSeisContraSeis() {

    let pokemonsJugador = [];
    let pokemonsRival = [];

    for (let i = 0; i < 6; i++) {

        let pokemonJugadorRandom = Math.floor(Math.random() * pokemonElegir.length);
        let pokemonJugador = pokemonElegir.splice(pokemonJugadorRandom, 1)[0];
        pokemonJugador.escalarEstadisticas();
        pokemonsJugador.push(pokemonJugador);

        let pokemonRivalRandom = Math.floor(Math.random() * pokemonElegir.length);
        let pokemonRival = pokemonElegir.splice(pokemonRivalRandom, 1)[0];
        pokemonRival.escalarEstadisticas();
        pokemonsRival.push(pokemonRival);

    }

    let numeroPokemonJugador = 0;
    let numeroPokemonRival = 0;

    let limitarCuracionJugador = false;
    let limitarCuracionRival = false;

    while (pokemonsJugador.length > 0 && pokemonsRival.length > 0) {

        let pokemonJugadorActivo = pokemonsJugador[numeroPokemonJugador];
        let pokemonRivalActivo = pokemonsRival[numeroPokemonRival];

        console.log("\n====== BATALLA POKÉMON ======\n");
        console.log(`${nombreEntrenadorPokemon}: ${pokemonJugadorActivo.nombre} (Nivel: ${pokemonJugadorActivo.nivel})`);
        console.log(`Tipo: ${pokemonJugadorActivo.tipo}`);
        console.log(`HP: ${pokemonJugadorActivo.hpactual.toFixed(0)} / ${pokemonJugadorActivo.hpmaximo}`);
        console.log("\nVS\n");
        console.log(`${nombreEntrenadorRival}: ${pokemonRivalActivo.nombre} (Nivel: ${pokemonRivalActivo.nivel})`);
        console.log(`Tipo: ${pokemonRivalActivo.tipo}`);
        console.log(`HP: ${pokemonRivalActivo.hpactual.toFixed(0)} / ${pokemonRivalActivo.hpmaximo}`);
        console.log("\n===========================\n");

        let eleccionJugador = readlineSync.questionInt("1. Atacar 2. Curarse 3. Cambiar de Pokemon: ");

        console.log(" ");
        console.log(" ");
        console.log(" ");
        console.log(" ");
        
        switch (eleccionJugador) {
            case 1:
                console.log("Movimientos disponibles:");
                for (let i = 0; i < pokemonJugadorActivo.movimientos.length; i++) {
                    console.log(`${i + 1}. ${pokemonJugadorActivo.movimientos[i].nombreMov} (Tipo: ${pokemonJugadorActivo.movimientos[i].tipo}, Poder: ${pokemonJugadorActivo.movimientos[i].poderMov}, Precision: ${pokemonJugadorActivo.movimientos[i].precision}%)`);
                }

                let eleccionAtaque = readlineSync.questionInt("Elige un ataque: ");


                while (eleccionAtaque < 1 || eleccionAtaque > pokemonJugadorActivo.movimientos.length) {
                    console.log("Seleccion invalida. Elige un numero valido.");
                    eleccionAtaque = readlineSync.questionInt("Elige un ataque: ");
                }

                console.log(" ");
                console.log(" ");
                console.log(" ");
                console.log(" ");

                let movimientoJugador = pokemonJugadorActivo.movimientos[eleccionAtaque - 1];
                let cambiarAtacante = true;
                pokemonJugadorActivo.ataquePokemon(pokemonJugadorActivo, pokemonRivalActivo, cambiarAtacante, movimientoJugador);
                break;

            case 2:
                if (!limitarCuracionJugador) {
                    let cambiarCurador = true;
                    pokemonJugadorActivo.curarse(cambiarCurador);
                    limitarCuracionJugador = true;
                } else {
                    console.log("¡Ya has usado tu curacion! Elige otra accion.");
                    continue;
                }
                break;

            case 3:

                pokemonsJugador.forEach((pokemon, index) => {
                    console.log(`${index + 1}. ${pokemon.nombre} (Nivel: ${pokemon.nivel}, HP: ${pokemon.hpactual.toFixed(0)} / ${pokemon.hpmaximo})`);
                });

                console.log(" ");
                console.log(" ");
                console.log(" ");
                console.log(" ");

                let eleccionNuevoPokemon = readlineSync.questionInt("Selecciona el numero del Pokemon que quieres usar: ");

                console.log(" ");

                if (pokemonsJugador[eleccionNuevoPokemon - 1] == pokemonJugadorActivo) {
                    console.log(`${pokemonJugadorActivo.nombre} ya es el Pokémon activo. Elige otro.`);
                    continue;
                }

                while (eleccionNuevoPokemon < 1 || eleccionNuevoPokemon > pokemonsJugador.length) {
                    console.log("Selección inválida. Elige un número válido.");
                    eleccionNuevoPokemon = readlineSync.questionInt("Selecciona el numero del Pokemon que quieres usar: ");
                }

                console.log(pokemonJugadorActivo.nombre, "se retira")

                numeroPokemonJugador = eleccionNuevoPokemon - 1;
                pokemonJugadorActivo = pokemonsJugador[numeroPokemonJugador];
                console.log(`¡Has cambiado a ${pokemonJugadorActivo.nombre}!\n`);
                break;
        }

        if (pokemonsRival.every(pokemon => pokemon.hpactual <= 0)) {
            console.log("¡Todos los Pokemon del rival han sido derrotados! ¡Has ganado!");
            break;
        }

        if (pokemonRivalActivo.hpactual <= 0) {
            console.log(`¡${pokemonRivalActivo.nombre} ha sido derrotado!`);
            pokemonsRival.splice(numeroPokemonRival, 1);
            pokemonRivalActivo = pokemonsRival[numeroPokemonRival];
            console.log(`¡Es el turno de ${pokemonRivalActivo.nombre}!\n`);
        }

        let eleccionMaquina = Math.floor(Math.random() * 2) + 1;

        switch (eleccionMaquina) {
            case 1:
                let movimientoMaquina = pokemonRivalActivo.movimientos[Math.floor(Math.random() * pokemonRivalActivo.movimientos.length)];
                cambiarAtacante = false;
                pokemonRivalActivo.ataquePokemon(pokemonRivalActivo, pokemonJugadorActivo, cambiarAtacante, movimientoMaquina);
                break;

            case 2:
                if (!limitarCuracionRival) {
                    let cambiarCurador = false;
                    let curacionIA = pokemonRivalActivo.curarse(cambiarCurador);

                    if (curacionIA) {
                        let movimientoMaquina = pokemonRivalActivo.movimientos[Math.floor(Math.random() * pokemonRivalActivo.movimientos.length)];
                        cambiarAtacante = false;
                        pokemonRivalActivo.ataquePokemon(pokemonRivalActivo, pokemonJugadorActivo, cambiarAtacante, movimientoMaquina);
                    } else {
                        limitarCuracionRival = true;
                    }
                } else {
                    let movimientoMaquina = pokemonRivalActivo.movimientos[Math.floor(Math.random() * pokemonRivalActivo.movimientos.length)];
                    cambiarAtacante = false;
                    pokemonRivalActivo.ataquePokemon(pokemonRivalActivo, pokemonJugadorActivo, cambiarAtacante, movimientoMaquina);
                }
                break;

        }

        if (pokemonsJugador.every(pokemon => pokemon.hpactual <= 0)) {
            console.log("¡Todos los Pokemon han sido derrotados! ¡Has perdido!");
            break;
        }

        if (pokemonJugadorActivo.hpactual <= 0) {
            console.log(`¡${pokemonJugadorActivo.nombre} ha sido derrotado!`);
            let numeroEliminar = pokemonsJugador.indexOf(pokemonJugadorActivo);
            pokemonsJugador.splice(numeroEliminar, 1);
            console.log("Elige un nuevo Pokemon:");

            pokemonsJugador.forEach((pokemon, index) => {
                console.log(`${index + 1}. ${pokemon.nombre} (Nivel: ${pokemon.nivel}, HP: ${pokemon.hpactual.toFixed(0)} / ${pokemon.hpmaximo})`);
            });

            let eleccionNuevoPokemon = readlineSync.questionInt("Selecciona el numero del Pokemon que quieres usar: ");

            while (eleccionNuevoPokemon < 1 || eleccionNuevoPokemon > pokemonsJugador.length) {
                console.log("Selección invalida. Elige un número valido.");
                eleccionNuevoPokemon = readlineSync.questionInt("Selecciona el número del Pokémon que quieres usar: ");
            }

            numeroPokemonJugador = eleccionNuevoPokemon - 1;
            pokemonJugadorActivo = pokemonsJugador[numeroPokemonJugador];
            console.log(`¡Has cambiado a ${pokemonJugadorActivo.nombre}!\n`);
        }

    }

    console.log("\n====== BATALLA POKÉMON ======\n");
    console.log(`${nombreEntrenadorPokemon}: ${pokemonJugadorActivo.nombre} (Nivel: ${pokemonJugadorActivo.nivel})`);
    console.log(`Tipo: ${pokemonJugadorActivo.tipo}`);
    console.log(`HP: ${pokemonJugadorActivo.hpactual.toFixed(0)} / ${pokemonJugadorActivo.hpmaximo}`);
    console.log("\nVS\n");
    console.log(`${nombreEntrenadorRival}: ${pokemonRivalActivo.nombre} (Nivel: ${pokemonRivalActivo.nivel})`);
    console.log(`Tipo: ${pokemonRivalActivo.tipo}`);
    console.log(`HP: ${pokemonRivalActivo.hpactual.toFixed(0)} / ${pokemonRivalActivo.hpmaximo}`);
    console.log("\n===========================\n");
    
}