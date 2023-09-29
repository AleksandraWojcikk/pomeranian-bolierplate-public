export const OopEncapsulation = () => {
  class Human {
    firstName;
    lastName;
    #secretNumber = 42;
    #hash = 90;

    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    #giveMeSecretNumber() {
      return this.#secretNumber;
    }

    getHashedSecretNumber() {
      const sn = this.#giveMeSecretNumber();
      return sn * this.#hash;
    }

    checkIfGivenNumberIsSn(num) {
      return this.getHashedSecretNumber() / num === this.#hash;
    }
  }
  console.log(ola.getHashedSecretNumber());
  console.log(ola.checkIfGivenNumberIsSn(42));

  const ola = new Human('Ola', 'Wójcik');
  return <>enkapsulacja</>;
};
