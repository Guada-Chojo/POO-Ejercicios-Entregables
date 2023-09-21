// Definición de la clase abstracta Personaje
abstract class Personaje {
  // Propiedades comunes a todos los personajes
  protected nombre: string;
  protected vida: number;
  protected energia: number;

  // Constructor para inicializar las propiedades
  constructor(nombre: string, vida: number, energia: number) {
    this.nombre = nombre;
    this.vida = vida;
    this.energia = energia;
  }

  getNombre(): string {
    return this.nombre
  }

  // Método abstracto para que un personaje ataque a otro
  abstract atacar(objetivo: Personaje, poder: number): void;
   // Método para que un personaje reciba un ataque
   recibirAtaque(poder: number) {
    this.vida -= poder; 
    if (this.vida !== 0) {
      console.log(`${this.nombre} recibe ${poder} puntos de daño. Vida restante: ${this.vida}`);
    } else {
      console.log(`${this.nombre} ha muerto. GAME OVER.`)
    }
  }

  // Método para que un personaje se cure
  curar(energiaCura: number) {
    console.log(`${this.nombre} se cura con ${energiaCura} puntos de energía.`);
    this.vida += energiaCura;
    console.log(Personaje);
  }

  
}

// Definición de la clase Guerrero que hereda de Personaje
class Guerrero extends Personaje {
  fuerza: number;
  escudoActivado: boolean;

  constructor(nombre: string, vida: number, energia: number, fuerza: number) {
    // Llamamos al constructor de la clase base
    super(nombre, vida, energia);
    this.fuerza = fuerza;
    this.escudoActivado = false;
  }

  // Método para que un Guerrero ataque a otro
  atacar(objetivo: Personaje, poder: number) {
    if (this.fuerza >= poder && this.energia !== 0) {
      this.energia -= (poder * poder/100);
      console.log(`${this.nombre} ataca a ${objetivo.getNombre()} con un poder de ${poder} puntos.`);
      objetivo.recibirAtaque(poder);
    } else {
      console.log(`${this.nombre} no tiene suficiente fuerza para atacar.`);
    }
  }

  // Método específico para activar o desactivar el escudo
  usarEscudo(activar: boolean) {
    this.escudoActivado = activar;
    if (activar) {
      console.log(`${this.nombre} activa su escudo.`);
    } else {
      console.log(`${this.nombre} desactiva su escudo.`);
    }
  }
}

// Definición de la clase Mago que hereda de Personaje
class Mago extends Personaje {
  mana: number;

  constructor(nombre: string, vida: number, energia: number, mana: number) {
    // Llamamos al constructor de la clase base
    super(nombre, vida, energia);
    this.mana = mana;
  }

  // Método para que un Mago ataque a otro lanzando un hechizo
  atacar(objetivo: Personaje, poder: number) {
    if (this.mana >= poder && this.energia !== 0) {
      this.energia -= (poder * poder/100);
      console.log(`${this.nombre} lanza un hechizo a ${objetivo.getNombre()} con un poder de ${poder} puntos.`);
      objetivo.recibirAtaque(poder);
      this.mana -= poder;
    } else {
      console.log(`${this.nombre} no tiene suficiente mana para lanzar el hechizo.`);
    }
  }
}

// Ejemplo de uso
const guerrero = new Guerrero("Conan", 100, 100, 30);
const mago = new Mago("Gandalf", 80, 100, 50);

console.log(guerrero);
console.log(mago);

guerrero.usarEscudo(true);
guerrero.atacar(mago, 20);
mago.atacar(guerrero, 50);
guerrero.atacar(mago, 20);
mago.curar(25);
guerrero.atacar(mago, 40);
mago.atacar(guerrero, 50);