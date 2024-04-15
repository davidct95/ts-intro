/*
    ===== Código de TypeScript =====
*/

function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      reportingURL = "http://www...";
    };
  }

@reportableClassDecorator
class MiSuperClase {
    public miPropiedad: string = 'ABC123';

    imprimir(){
        console.log('Hola Mundo');
    }
}

console.log(MiSuperClase)

const miClase = new MiSuperClase();