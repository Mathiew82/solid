// --- En este ejemplo se crean dos interfaces para separar los métodos que solo implementarán las clases de vehículos Tesla
// --- Si solo existiera una interfaz se estaría violando el principio de segregación de interfaces, ya que habrían métodos
// que debería implementar la clase Mustang que no necesitaría.
interface Car {
  accelerate: () => void;
  brake: () => void;
  startEngine: () => void;
}

interface Tesla {
  autoPilot: () => void;
  ludicrousSpeed: () => void;
}

class Mustang implements Car {
  accelerate() {
    console.log("accelerate");
  }

  brake() {
    console.log("brake");
  }

  startEngine() {
    console.log("startEngine");
  }
}

class tesla implements Car, Tesla {
  accelerate() {
    console.log("accelerate");
  }

  brake() {
    console.log("brake");
  }

  startEngine() {
    console.log("startEngine");
  }

  autoPilot() {
    console.log("autoPilot");
  }

  ludicrousSpeed() {
    console.log("ludicrousSpeed");
  }
}
