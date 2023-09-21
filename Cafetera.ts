class Cafetera {
    private capacidadMaxima: number;
    private cantidadActual: number;
  
    constructor(capacidadMaxima?: number, cantidadActual?:number) {
        if (capacidadMaxima === undefined) {
            this.capacidadMaxima = 1000;
        } else {
            this.capacidadMaxima = capacidadMaxima;
      } 
        if (cantidadActual === undefined) {
            this.cantidadActual = 0;
        } else {
            if (this.capacidadMaxima > cantidadActual) {
                this.cantidadActual = cantidadActual;
            } else {
                this.cantidadActual = this.capacidadMaxima;
            }
        } 
    }

    // Getters
    getCapacidadMaxima() : number {
        return this.capacidadMaxima
    }
    getCantidadActual() : number {
        return this.cantidadActual
    }
    
    // Metodo para ver si la cafetera esta vacia
    estaVacia(): boolean {
        if (this.cantidadActual > 0) {
            return false;
      } else {
        console.log("No hay suficiente café en la cafetera.");
        this.cantidadActual = 0;
      }
    }
  
    // Método para vaciar la cafetera
    vaciarCafetera() {
      this.cantidadActual = 0;
    }

    // Método para llenar la cafetera
  llenarCafetera() {
    this.cantidadActual = this.capacidadMaxima;
  }
  
    // Método para agregar café a la cafetera
    agregarCafe(cantidad: number) {
      if (this.cantidadActual + cantidad <= this.capacidadMaxima) {
        this.cantidadActual += cantidad;
        console.log(`Se han agregado ${cantidad} cc de café a la cafetera.`);
      } else {
        console.log("La cafetera está llena. No se puede agregar más café.");
      }
    }

    // Método para servir una taza de café
  servirTaza(cantidad: number) {
    if (this.cantidadActual >= cantidad) {
      this.cantidadActual -= cantidad;
      console.log(`Se ha servido una taza de ${cantidad} cc de café.`);
    } else {
      console.log("No hay suficiente café en la cafetera.");
      this.cantidadActual = 0;
    }
  }

}
  
  // Ejemplo de uso
  const miCafetera = new Cafetera(1500); // Crear una cafetera con capacidad máxima de 1500 cc
  miCafetera.agregarCafe(500); // Agregar 500 cc de café
  miCafetera.servirTaza(200); // Servir una taza de 200 cc de café
  console.log(`Cantidad actual de café en la cafetera: ${miCafetera.getCantidadActual()} cc.`);
  