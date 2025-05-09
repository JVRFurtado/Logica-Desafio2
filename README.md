# 🎮 Calculadora de Partidas Rankeadas

Projeto desenvolvido como parte do **Desafio de Projeto** da formação **Lógica de Programação** da plataforma [DIO](https://www.dio.me).

## 📋 Descrição

O objetivo deste projeto é calcular o saldo de vitórias de um herói em partidas ranqueadas e classificá-lo em uma **patente** com base em sua performance. O projeto foi implementado em JavaScript e utiliza uma função para calcular o saldo, além de estruturas condicionais para determinar a patente.

## ⚙️ Como funciona

O programa recebe o número de **vitórias** e **derrotas** de um jogador, calcula o saldo e, com base nesse resultado, informa a **patente** do herói de acordo com a seguinte tabela:

| Saldo de Vitórias | Patente     |
|-------------------|-------------|
| 0 - 10            | Ferro       |
| 11 - 20           | Bronze      |
| 21 - 50           | Prata       |
| 51 - 80           | Ouro        |
| 81 - 90           | Diamante    |
| 91 - 100          | Lendário    |
| 101+              | Imortal     |

## 💡 Exemplo de uso

```javascript
function SomaSaldo(vitorias, derrotas) {
    return vitorias - derrotas;
}

let resultado = SomaSaldo(1285, 750);
```
Neste exemplo, o saldo é 535, então a saída será:

```bash
O Herói tem uma média de vitorias de 535 e está na patente Imortal
```
## 📁 Arquivo

  index.js — Código-fonte com a lógica de cálculo e classificação.

## 🛠️ Tecnologias utilizadas

  JavaScript (Node.js)

  Editor de código (VSCode ou outro de sua preferência)

## 👨‍🎓 Autor

Desenvolvido por mim como parte da formação oferecida pela DIO.

🧠 Um projeto essencial para aprender e reforçar a lógica com funções e condicionais em JavaScript!
