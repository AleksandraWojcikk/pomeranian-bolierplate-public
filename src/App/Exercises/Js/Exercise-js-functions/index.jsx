import './styles.css';

export function Exercise() {

const animal = {
  name: 'dog',
  age: 15
}
animal.age = 60;
console.log(animal.age);



  const numer1 = 4;
  const numer2 = 5;

  function multiply(num1, num2) {
    return num1 * num2;
  }

  function getWelcomeMessage(name, amount) {
    return `Witaj ${name}! Jesteś ${amount} użytkownikiem odwiedzającym tę stronę!`;
  }

  return (
    <div>
      <p>Definiowanie funkcji</p>
      <pre>
        <code>
          {`
            function multiply(num1, num2) {
                return num1 * num2;
            }
            
            const result = multiply(9, 9)  // wynik 81
            `}
        </code>
      </pre>

      <section>
        <h2>Wykorzystywanie funkcji - przykłady</h2>
        <pre>
          <code>9 * 9 = {multiply(9, 9)}</code>
        </pre>
        <pre>
          <code>{getWelcomeMessage('Jon', 129384)}</code>
        </pre>
      </section>
      <pre>
        <code>4 * 5 = {multiply(numer1, numer2)}</code>
      </pre>

      <p>Wynik funkcji {multiply(numer1, numer2)}</p>
      <p> {getWelcomeMessage('Ola', 13)}</p>
    </div>
  );
}
