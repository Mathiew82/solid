// --- En este ejemplo pasamos a la clase NotificationUsers la instancia de PrintAMessage
// pero el tipo que declaramos en el constructor al inyectar la dependendia es el tipo de la interfaz
// --- Así conseguimos invertir la dependencia en el constructor para depender de la abstracción y no de la concreción
interface Printable {
  printByConsole: (message: string) => void;
}

class PrintAMessage implements Printable {
  public printByConsole(message: string): void {
    console.log(message);
  }
}

class NotificationUsers {
  private showMessage: Printable;

  constructor(showMessage: Printable) {
    this.showMessage = showMessage;
  }

  public printNotification(notification: string) {
    this.showMessage.printByConsole(notification);
  }
}

const notification = "Esta es una notificación de prueba";
const notificationUsers = new NotificationUsers(new PrintAMessage());

notificationUsers.printNotification(notification);
