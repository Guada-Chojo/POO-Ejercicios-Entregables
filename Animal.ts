// Definición de la clase abstracta Animal
abstract class Animal {
  public nombre: string;
  public edad: number; 
  public raza: string

  constructor(nombre: string,edad: number, raza: string) {
    this.nombre = nombre;
    this.edad = edad;
    this.raza = raza;
  }

  // Métodos abstractos
  abstract hacer_sonido(): void;
  abstract moverse(): void;
  abstract mostrarInfo():void
}

// Clase Perro que hereda de Animal
class Perro extends Animal {
  private tamaño: string;

  constructor(nombre: string, edad: number, raza: string, tamaño: string) {
    super(nombre, edad, raza);
    this.tamaño = tamaño;
  }

  // Implementación de mostrarInfo específico para Perro
  mostrarInfo(): void {
    console.log(`Perro - Nombre: ${this.nombre}. Edad: ${this.edad}. Raza: ${this.raza}. Tamaño: ${this.tamaño}.`)
  }

  // Implementación de hacer_sonido específico para Perro
  hacer_sonido(): void {
    console.log(`${this.nombre} hace un ladrido.`);
  }

  // Implementación de moverse específico para Perro
  moverse(): void {
    console.log(`${this.nombre} corre alrededor del parque.`);
  }

  // Método específico de Perro para buscar un objeto
  buscar_objeto(objeto: string): void {
    console.log(`${this.nombre} está buscando ${objeto}.`);
  }
}

// Clase Gato que hereda de Animal
class Gato extends Animal {
  private pelaje: string;

  constructor(nombre: string, edad: number, raza: string, pelaje: string) {
    super(nombre, edad, raza);
    this.pelaje = pelaje;
  }

  // Implementación de mostrarInfo específico para Gato
  mostrarInfo(): void {
    console.log(`Gato - Nombre: ${this.nombre}. Edad: ${this.edad}. Raza: ${this.raza}. Pelaje: ${this.pelaje}.`)
  }

  // Implementación de hacer_sonido específico para Gato
  hacer_sonido(): void {
    console.log(`${this.nombre} hace un maullido.`);
  }

  // Implementación de moverse específico para Gato
  moverse(): void {
    console.log(`${this.nombre} camina hacia un sillon a recostarse.`);
  }

  // Método específico de Gato para jugar con un juguete
  jugar_con_juguete(juguete: string): void {
    console.log(`${this.nombre} está jugando con ${juguete}.`);
  }
}

// Clase Pájaro que hereda de Animal
class Pajaro extends Animal {
  private tipo_de_pico: string;

  constructor(nombre: string, edad: number, raza: string, tipo_de_pico: string) {
    super(nombre, edad, raza);
    this.tipo_de_pico = tipo_de_pico;
  }
  
  // Implementación de mostrarInfo específico para Pájaro
  mostrarInfo(): void {
    console.log(`Pajaro - Nombre: ${this.nombre}. Edad: ${this.edad}. Raza: ${this.raza}. Tipo de pico: ${this.tipo_de_pico}.`)
  }

  // Implementación de hacer_sonido específico para Pájaro
  hacer_sonido(): void {
    console.log(`${this.nombre} comienza a cantar.`);
  }

  // Implementación de moverse específico para Pájaro
  moverse(): void {
    console.log(`${this.nombre} revolotea dentro de su jaula.`);
  }

  // Método específico de Pájaro para volar
  volar(): void {
    console.log(`${this.nombre} está volando.`);
  }
}

// Ejemplo de uso
const miPerro = new Perro("Max", 3, "Labrador", "Grande");
const miGato = new Gato("Whiskers", 2, "Siamese", "Suave");
const miPajaro = new Pajaro("Polly", 1, "Loro", "Curvo");

miPerro.mostrarInfo();
miPerro.hacer_sonido();
miPerro.moverse();
miPerro.buscar_objeto("una pelota");

miGato.mostrarInfo();
miGato.hacer_sonido();
miGato.moverse();
miGato.jugar_con_juguete("una cuerda");

miPajaro.mostrarInfo();
miPajaro.hacer_sonido();
miPajaro.moverse();
miPajaro.volar();

