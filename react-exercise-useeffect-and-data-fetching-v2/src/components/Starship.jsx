const Starship = (props) => {
  const { starships } = props;
  return (
    <div>
      {starships &&
        starships.results.map((starship) => {
          return (
            <>
              <h1>{starship.name}</h1>
              <h2>Model:</h2>
              <p>{starship.model}</p>
              <h2>Manufacturer:</h2>
              <p>{starship.manufacturer}</p>
              <h2>Crew:</h2>
              <p>{starship.crew}</p>
              <h2>Passengers:</h2>
              <p>{starship.passengers}</p>
              <h2>Cargo Capacity:</h2>
              <p>{starship.cargo_capacity}</p>
              <h2>Starship Class:</h2>
              <p>{starship.starship_class}</p>
            </>
          );
        })}
    </div>
  ); // TODO: replace this
};

export default Starship;
