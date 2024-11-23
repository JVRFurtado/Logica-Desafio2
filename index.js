function SomaSaldo(vitorias, derrotas) {
    return vitorias - derrotas;
}

let resultado = SomaSaldo(1285, 750);

if (resultado <= 10) {
    console.log("O Herói tem uma média de vitorias de " + resultado + " e está na patente Ferro");
  } else if (resultado <= 20) {
    console.log("O Herói tem uma média de vitorias de " + resultado + " e está na patente Bronze");
  } else if (resultado <= 50) {
    console.log("O Herói tem uma média de vitorias de " + resultado + " e está na patente Prata");
  } else if (resultado <= 80) {
    console.log("O Herói tem uma média de vitorias de " + resultado + " e está na patente Ouro");
  } else if (resultado <= 90) {
    console.log("O Herói tem uma média de vitorias de " + resultado + " e está na patente Diamante");
  } else if (resultado <= 100) {
    console.log("O Herói tem uma média de vitorias de " + resultado + " e está na patente Lendário");
  } else if (resultado >= 101) {
    console.log("O Herói tem uma média de vitorias de " + resultado + " e está na patente Imortal");
  };