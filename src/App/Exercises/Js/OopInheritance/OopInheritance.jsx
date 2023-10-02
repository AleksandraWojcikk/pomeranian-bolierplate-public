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

// stwórz klasę Person posiadającą metodę, która wyświetli nam komunikat
// introduce() => "I am a Person"
// następnie stwórz dwie podklasy Builder i Doctor, dziedziczące metodę i wyświetlające odpowiednio komunikat
// introduce() => "I am a Person", "I am also a Doctor"
// introduce() => "I am a Person", "I am also a Builder"
// następnie stwórz podklasę Doctor: Pediatrician - metoda ma wyświetlić jedynie : introduce() => "I'm a Pediatrician"
