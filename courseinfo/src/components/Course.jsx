const Header = ({ title }) => {
  return <h1>{title}</h1>;
};

const Total = ({ sum }) => <b>total of {sum} exercises</b>;

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Content = ({ parts }) => (
  <>
    {parts.map((part, index) => (
      <Part key={index} part={part} />
    ))}
  </>
);

const Course = ({ course }) => {
  const partsArray = course.parts;

  const addTwoNums = (a, b) => a + b.exercises;

  const sum = partsArray.reduce(addTwoNums, 0);

  return (
    <>
      <Header title={course.name} />
      <Content parts={course.parts} />
      <Total sum={sum} />
    </>
  );
};

export default Course;
