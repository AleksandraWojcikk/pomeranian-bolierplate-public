export const OopInheritance = () => {
  class Person {
    introduce() {
      console.log('I am a Person');
    }
  }

  class Builder extends Person {
    introduce() {
      super.introduce();
      console.log('I am also a Builder');
    }
  }

  class Doctor extends Person {
    introduce() {
      super.introduce();
      console.log('I am also a Doctor');
    }
  }

  class Pediatrician extends Doctor {
    introduce() {
      console.log("I'm a Pediatrician");
    }
  }

  const person = new Person();
  person.introduce();

  const builder = new Builder();
  builder.introduce();

  const doctor = new Doctor();
  doctor.introduce();

  const pediatrician = new Pediatrician();
  pediatrician.introduce();

  return <>dziedziczenie</>;
};
