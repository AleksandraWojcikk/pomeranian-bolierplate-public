export const OopComposition = () => {
  class Computer {
    #faveWord = 'I compute!';

    #add(x, y) {
      return x + y;
    }

    compute(a, b, multiplyer) {
      return this.#add(a, b) * multiplyer;
    }

    introduce() {
      return this.#faveWord;
    }
  }

  const computer = new Computer();

  console.log(computer.compute(1, 2, 2));

  console.log(computer.introduce());

  return <>enkapsulacja</>;
};
