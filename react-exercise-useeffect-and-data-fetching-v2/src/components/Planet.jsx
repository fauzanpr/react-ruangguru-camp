const Planet = (props) => {
  const { planets } = props;
  return (
    <div>
      {planets &&
        planets.results.map((planet) => {
          return (
            <>
              <h1>{planet.name}</h1>
              <h2>Rotation Period:</h2>
              <p>{planet.rotation_period}</p>
              <h2>Orbital Period:</h2>
              <p>{planet.orbital_period}</p>
              <h2>Terrain:</h2>
              <p>{planet.terrain}</p>
              <h2>Population:</h2>
              <p>{planet.population}</p>
              <h2>Climate:</h2>
              <p>{planet.climate}</p>
            </>
          );
        })}
    </div>
  ); // TODO: replace this
};

export default Planet;
