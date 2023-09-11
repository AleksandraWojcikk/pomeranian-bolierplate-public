export const JsStringTraining = () => {
  function ucFirst(input) {
    const firstLetter = input.charAt(0);
    const rest = input.slice(1);

    return firstLetter.toUpperCase() + rest;
  }

  function truncate(input, endIndex) {
    return input.substring(0, endIndex);
  }

  function isPalindrom(input) {
    const lowerInput = input.toLowerCase();
    const reversed = lowerInput.split('').reverse().join('');
    return lowerInput === reversed; //sprawdza, czy jes palindromem; w .toString kaemu aby się wyswietlil string, anie wartosc true/false
  }

  return (
    <>
      <div>
        <p>{ucFirst('john')}</p>
        <p>{truncate('Hello worldgduiaciusbcuisdbcub', 8)}</p>
        <p>{isPalindrom('Ala').toString()}</p>
      </div>
    </>
  );
};
