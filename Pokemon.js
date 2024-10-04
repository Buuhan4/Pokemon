class Pokemon {
    constructor(nombre,hpactual,hpmaximo,ataque,defensa,movimientos,tipo ) {
        this.nombre=nombre;
        this.hpactual=hpactual;
        this.hpmaximo=hpmaximo;
        this.ataque=ataque;
        this.defensa=defensa;
        this.movimientos=movimientos;
        this.tipo=tipo;

    }
     ataquePokemon(ataque) {
        
    }
     curarse(){
    let curacion=this.hpmaximo*0.5;
    this.hpactual=hpactual+curacion;

    }
}
module.exports=Pokemon;