// 1. stwórz obiekt z przypisaną właściwością name (np. "Jeremy")
// 2. dodaj 2 metody w obiekcie:
// - classicGreet - metoda tworzona poprzez keyword function, jej zadaniem jest console.log z
// wartością this.name
// - arrowGreet - metoda tworzona strzałkowo, jej body jest takie samo jak metody wyżej.
// 3. spróbuj wywołać obie funkcje na tym obiekcie, co się stanie?
// 4. zastosuj dla obu metody call lub apply z wybranymi argumentami

export const This = () => {
  const Boy = {
    name: 'Jeremy',
    classicGreet: function () {
      console.log(this.name);
    },
    arrowGreet: () => {
      console.log(this.name);
    },
  };

  // arrowGreet.call(Boy);
  // arrowGreet.apply(Boy);

  console.log(Boy.classicGreet());
  console.log(Boy.arrowGreet());

  return <div>zmien mnie</div>;
};
