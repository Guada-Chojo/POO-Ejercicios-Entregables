class Logger {
    private static instancia: Logger = null; // Instancia única del Logger.
    private registro: string[] = []; // Registro de accesos de usuarios.

    private constructor() { } // Constructor privado para asegurar una sola instancia

    // Metodo que genera una instancia si no la hay.
    static getInstancia(): Logger {
        if (Logger.instancia === null) {
            Logger.instancia = new Logger();
        }
        return Logger.instancia;
    }

    // Metodo que guarda una instancia de acceso de un usuario en el registro.
    logAcceso(usuario: string): void {
        const tiempoLogin = new Date().toLocaleString();
        const instLog = `[${tiempoLogin}] - El usuario ${usuario} ha accedido al sistema.`;
        this.registro.push(instLog);
    }

    // Metodo que muestra el arreglo que contiene el registro.
    mostrarlogAcceso(): void {
        console.log('Registro de login del sistema:');
        this.registro.forEach((instLog, i) => {
            console.log(`${instLog}`);
        });
    }
}

// Uso del Logger.
const logger = Logger.getInstancia();

function accederSistema(usuario: string) {
    // Simulación de acceso al sistema por un usuario.
    logger.logAcceso(usuario);
}

// Genero varias llamadas a accederSistema.
accederSistema("G4ll3g0");
accederSistema("Lovely4Ever");
accederSistema("MCRfan123");

// Muestro el registro de usuarios que ingresaron.
logger.mostrarlogAcceso();
