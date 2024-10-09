const { Type, tipoEfectivo } = require('./Type');
class Pokemon {
    constructor(nombre, hpactual, hpmaximo, ataque, defensa, movimientos, tipo, nivel) {
        this.nombre = nombre;
        this.hpactual = hpactual;
        this.hpmaximo = hpmaximo;
        this.ataque = ataque;
        this.defensa = defensa;
        this.movimientos = movimientos;
        this.tipo = tipo;
        this.nivel = nivel;
    }


    ataquePokemon(atacante, defensor, cambiarAtacante, movimientoPokemon) {
        let movimiento;
        let critico;
        let probabilidadFallo = Math.random() * 100;
        if (probabilidadFallo > movimientoPokemon.precision) {
            console.log(`${atacante.nombre} usa ${movimientoPokemon.nombreMov}, ¡pero falla!`);
            return;
        }

        if (cambiarAtacante) {
            let multiplicadorEfectividad = tipoEfectivo[movimientoPokemon.tipo][defensor.tipo] || 1;

            movimiento = movimientoPokemon.poderMov;
            let factorAleatorio = Math.random() * (1 - 0.85) + 0.85;
            let daño = (atacante.ataque / defensor.defensa) * movimiento * factorAleatorio * multiplicadorEfectividad;
            critico = Math.floor(Math.random() * 100) + 1;

            if (critico <= 6.25) {
                console.log("Ha sido critico");
                daño = daño * 1.5;
            }

            defensor.hpactual = defensor.hpactual - daño;

            if (defensor.hpactual < 0) {
                defensor.hpactual = 0;
            }
            if (multiplicadorEfectividad === 0) {
                console.log("No tiene efecto");
            } else if (multiplicadorEfectividad === 0.5) {
                console.log(`Es poco efectivo,${atacante.nombre} usa ${movimientoPokemon.nombreMov} y causa ${daño.toFixed(0)} puntos de daño a ${defensor.nombre}.`);
            } else if (multiplicadorEfectividad === 1) {
                console.log(`Es efectivo,${atacante.nombre} usa ${movimientoPokemon.nombreMov} y causa ${daño.toFixed(0)} puntos de daño a ${defensor.nombre}.`);
            } else if (multiplicadorEfectividad === 2) {
                console.log(`Es super efectivo,${atacante.nombre} usa ${movimientoPokemon.nombreMov} y causa ${daño.toFixed(0)} puntos de daño a ${defensor.nombre}.`);
            } else {
                console.log(`${atacante.nombre} usa ${movimientoPokemon.nombreMov} y causa ${daño.toFixed(0)} puntos de daño a ${defensor.nombre}. (Efectividad: ${multiplicadorEfectividad}x)`);
            }

            return;
        } else {
            let multiplicadorEfectividad = tipoEfectivo[movimientoPokemon.tipo][defensor.tipo] || 1;

            movimiento = movimientoPokemon.poderMov;
            let factorAleatorio = Math.random() * (1 - 0.85) + 0.85;
            let daño = (atacante.ataque / defensor.defensa) * movimiento * factorAleatorio * multiplicadorEfectividad;
            critico = Math.floor(Math.random() * 100) + 1;

            if (critico <= 6.25) {
                console.log("Ha sido critico");
                daño = daño * 1.5;
            }

            defensor.hpactual = defensor.hpactual - daño;

            if (defensor.hpactual < 0) {
                defensor.hpactual = 0;

            }
            if (multiplicadorEfectividad === 0) {
                console.log("No tiene efecto");
            } else if (multiplicadorEfectividad === 0.5) {
                console.log(`Es poco efectivo,${atacante.nombre} usa ${movimientoPokemon.nombreMov} y causa ${daño.toFixed(0)} puntos de daño a ${defensor.nombre}.`);
            } else if (multiplicadorEfectividad === 1) {
                console.log(`Es efectivo,${atacante.nombre} usa ${movimientoPokemon.nombreMov} y causa ${daño.toFixed(0)} puntos de daño a ${defensor.nombre}.`);
            } else if (multiplicadorEfectividad === 2) {
                console.log(`Es super efectivo,${atacante.nombre} usa ${movimientoPokemon.nombreMov} y causa ${daño.toFixed(0)} puntos de daño a ${defensor.nombre}.`);
            } else {
                console.log(`${atacante.nombre} usa ${movimientoPokemon.nombreMov} y causa ${daño.toFixed(0)} puntos de daño a ${defensor.nombre}. (Efectividad: ${multiplicadorEfectividad}x)`);
            }
            return;
        }
    }


    curarse(cambiarCurador) {
        if (cambiarCurador) {
            let curacion = this.hpmaximo * 0.5;
            this.hpactual = this.hpactual + curacion;
            if (this.hpactual > this.hpmaximo) {
                this.hpactual = this.hpmaximo;
            }
            console.log(this.nombre, "se ha curado");
        } else {
            if (this.hpactual == this.hpmaximo) {
                return true;
            } else {
                let curacion = this.hpmaximo * 0.5;
                this.hpactual = this.hpactual + curacion;
                if (this.hpactual > this.hpmaximo) {
                    this.hpactual = this.hpmaximo;
                }
                console.log(this.nombre, "se ha curado");
                return false;
            }
        }
    }

    
    escalarEstadisticas() {
        this.hpmaximo = Math.round(this.hpmaximo * (1 + (this.nivel - 1) * 0.1));
        this.hpactual = this.hpmaximo;
        this.ataque = Math.round(this.ataque * (1 + (this.nivel - 1) * 0.05));
        this.defensa = Math.round(this.defensa * (1 + (this.nivel - 1) * 0.05));
    }
}
module.exports = Pokemon;