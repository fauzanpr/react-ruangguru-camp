const People = (props) => {
  const { people } = props;
  return (
    <div>
      {people &&
        people.results.map((person) => {
          return (
            <>
              <h1>{person.name}</h1>
              <h2>Gender:</h2>
              <p>{person.gender}</p>
              <h2>Birth Year</h2>
              <p>{person.birth_year}</p>
              <h2>Mass:</h2>
              <p>{person.mass}</p>
              <h2>Height:</h2>
              <p>{person.height}</p>
              <h2>Eye Color:</h2>
              <p>{person.eye_color}</p>
            </>
          );
        })}
    </div>
  ); // TODO: replace this
};

export default People;
