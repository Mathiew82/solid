// --- Una clase de una entidad del negocio con un seter privado y un constructor para evitar instanciarla de forma anémica
class User {
  private name: string;
  private age: number | undefined;

  private setAge(age: number) {
    if (age < 0) throw "No se puede agregar una edad por debajo de cero.";
    this.age = age;
  }

  constructor(name: string, age: number) {
    this.name = name;
    this.setAge(age);
  }

  public getName() {
    return this.name;
  }

  public getAge() {
    return this.age;
  }

  public userMessage(message: string) {
    return `${this.name} dice: '${message}'`;
  }
}

const newUser = new User("Alberto", 39);

// console.log(newUser);
// console.log(newUser.userMessage('Esto es un saludo'));

// --- Principio de Responsabilidad Única - S de SOLID (Single Responsability Principle)
interface managementMessage {
  printMessage<Function>(message: string): void;
}

class PrintMessage implements managementMessage {
  public printMessage(message: string): void {
    console.log(message);
  }
}

class ManagementError {
  printMessage: any;

  constructor(printMessage: any) {
    this.printMessage = printMessage;
  }

  public showErrorMessage(message: string): void {
    printMessage.printMessage(message);
  }
}

const printMessage = new PrintMessage();
const managementError = new ManagementError(printMessage);
managementError.showErrorMessage("Este es un mensaje de error de prueba");
