import { SingleQuestion } from './SingleQuestion/SingleQuestion';
import './styles.css';

export const FAQ = () => {
  return (
    <>
      <div>
        <SingleQuestion question="Jak masz na imię" answer="Ola" />
        <SingleQuestion question="Ile masz lat?" answer="46" />
        <SingleQuestion question="Test 1" answer="Answer 1" />
        <SingleQuestion question="Test 1" answer="Answer 1" />
        <SingleQuestion question="Test 1" answer="Answer 1" />
      </div>
    </>
  );
};
