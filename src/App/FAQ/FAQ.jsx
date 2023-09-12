import { SingleQuestion } from './SingleQuestion/SingleQuestion';
import './styles.css';

export const FAQ = () => {
  return (
    <>
      <div>
        <SingleQuestion
          question="Jak mogę zapisać się na szkolenie?"
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend rutrum ipsum, leo et in. Mattis porttitor volutpat placerat suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        />
        <SingleQuestion
          question="Jak mogę zapisać się na szkolenie?"
          answer="No answer yet."
        />
        <SingleQuestion
          question="Czego oczekujesz po kursie?"
          answer="Chcę znaleźć pracę w branży IT."
        />
        <SingleQuestion
          question="Czy masz doświadczenie w branży IT?"
          answer="Nie mam, dlatego jest mi tak trudno."
        />
        <SingleQuestion
          question="Czym zajmujesz się na codzień?"
          answer="Pracuję jako QA."
        />
      </div>
    </>
  );
};
