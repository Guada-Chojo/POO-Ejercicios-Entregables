// Definición de la clase Vehículo.
class Vehicle {
  constructor(
    protected tipo: string,
    protected marca: string,
    protected modelo: string,
    protected asientos: number,
    protected capacidadCarga: string
  ) {}

  // Método para imprimir los detalles del vehículo.
  printDetails(): void {
    console.log(`Tipo: ${this.tipo}`);
    console.log(`Marca: ${this.marca}`);
    console.log(`Modelo: ${this.modelo}`);
    console.log(`Asientos: ${this.asientos}`);
    console.log(`Capacidad de Carga: ${this.capacidadCarga}`);
  }
}

// Definición de la clase fábrica.
class VehicleFactory {
  private vehicles: Vehicle[] = []; // Registro de vehículos creados

  // Metodo para crear un Vehiculo.
  createVehicle(
    tipo: string,
    marca: string,
    modelo: string,
    asientos: number,
    capacidadCarga: string
  ): Vehicle {
    let vehiculo: Vehicle;
    if (tipo === 'Auto') {
      vehiculo = new Auto(tipo, marca, modelo, asientos, capacidadCarga);
    } else if (tipo === 'Camioneta') {
      vehiculo = new Camioneta(tipo,marca, modelo, asientos, capacidadCarga);
    } else {
      throw new Error('Tipo de vehículo no válido');
    }
    // Agrega el vehiculo al registro.
    this.vehicles.push(vehiculo);
    return vehiculo;
  }

  // Método para obtener el registro de vehículos.
  getRegisteredVehicles(): Vehicle[] {
    return this.vehicles;
  }
}

// Definición de las clases concretas para Auto y Camioneta.
class Auto extends Vehicle {
  constructor(
    tipo: string,
    marca: string,
    modelo: string,
    asientos: number,
    capacidadCarga: string
  ) {
    super(tipo, marca, modelo, asientos, capacidadCarga);
  }
}

class Camioneta extends Vehicle {
  constructor(
    tipo: string,
    marca: string,
    modelo: string,
    asientos: number,
    capacidadCarga: string
  ) {
    super(tipo, marca, modelo, asientos, capacidadCarga);
  }
}

// Uso de la clase fábrica
const factory = new VehicleFactory();

// Creación de un Auto y una Camioneta.
const auto = factory.createVehicle('Auto', 'Toyota', 'Corolla', 5, '500 kg');
const camioneta = factory.createVehicle('Camioneta', 'Ford', 'Ranger', 5, '1000 kg');

// Obtener y mostrar el registro de vehículos
const registeredVehicles = factory.getRegisteredVehicles();
console.log('Vehículos registrados:');
registeredVehicles.forEach((vehicle, index) => {
  console.log(`[Vehículo ${index + 1}]`);
  vehicle.printDetails(); // Impresion de detalles de los vehiculos.
  console.log('-----------------------');
});
