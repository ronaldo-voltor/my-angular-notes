function addNumbers(a: number, b: number): number {
  return a + b;
}
const result: number = addNumbers(5, 10);

// funciones flecha
const multiplyNumbers = (x: number, y?: number, base: number = 2): number => {
  return x * base;
};

// const product: number = multiplyNumbers(5);
// console.log({ result, product });

interface Character {
  name: string;
  hp: number;
  showHp: () => void;
}

const healCharacter = (character: Character, points: number) => {
  character.hp += points;
};

const vegeta: Character = {
  name: "Vegeta",
  hp: 46,
  showHp() {
    console.log(`Puntos de vida: ${this.hp}`);
  },
};

healCharacter(vegeta, 40);

vegeta.showHp();
