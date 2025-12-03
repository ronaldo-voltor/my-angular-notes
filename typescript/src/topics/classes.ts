export class Person {
  constructor(
    public firstName: string,
    public lastName: string,
    private address: string = 'No Address'
  ) {}
}

// composición en vez de herencia
// es cuando una clase contiene a otra como parte de su estructura para reutilizar comportamiento.
// un héroe tiene una persona (en vez de decir: un héroe es una persona)
export class Hero {
  constructor(
    public alterEgo: string,
    public age: number, 
    public realName: string,
    public person: Person // 👈 Se compone usando Person
  ) {}
}
const tony = new Person('Tony', 'Stark', 'New York');
const ironman = new Hero('Ironman', 45, 'Tony', tony);

console.log(ironman);
