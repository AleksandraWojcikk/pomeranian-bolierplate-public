export const ClassesBasics = () => {
  class Animal {
    age;
    type;
    static hasHead = true; //mogę się bezpośrednio odwołać, nie trzeba podawać instancji, np. Animal.hasHead
    name;

    constructor(age, type, name) {
      //specjalna f-cja, którą mozemy zdefiniować; musimy się do nich odwołać
      this.age = age; // this odnosi się do instacji, w której się znajdujemy
      this.type = type;
      this.name = name;
    }
    move() {
      //metoda
      console.log('tup tup tup'); //funckje dostęĻne w tej klasie (do animal)
    }

    static sayHello() {
      //funckje dostępne dla wsysktich, nawet do Animal
      console.log('Hello');
    }
  }
  const animal = new Animal(12, 'cat', 'Mruczek');
  console.log(animal);

  console.log(animal instanceof Animal);

  return <>classes</>;
};
