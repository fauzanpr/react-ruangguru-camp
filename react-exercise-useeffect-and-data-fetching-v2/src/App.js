import { useEffect, useState } from "react";
import People from "./components/People";
import Planet from "./components/Planet";
import Starship from "./components/Starship";
// TODO: answer here

const App = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [option, setOption] = useState('people');
  const [baseURL, setBaseURL] = useState('https://swapi.py4e.com/api/people');

  useEffect(() => {
    fetch(baseURL)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setLoading(false);
        setData(res);
      });

      return () => {
        setData(null);
      }
  }, [baseURL]);

  const changeBase = (option) => {
    console.log(option);
    let url;
    if (option === 'people') {
        url = 'https://swapi.py4e.com/api/people';
    } else if (option === 'planets') {
        url = 'https://swapi.py4e.com/api/planets';
    } else if (option === 'starship') {
        url = 'https://swapi.py4e.com/api/starships';
    }
    setLoading(true);
    setOption(option);
    setBaseURL(url);
  };

  return (
    <div>
      <select name="" id="" onChange={(e) => changeBase(e.target.value)}>
        <option value="people">People</option>
        <option value="planets">Planets</option>
        <option value="starship">Starships</option>
      </select>
      <h1>HELLO FUCKIN WORLD</h1>
      {loading && <p>Loading...</p>}
      { data && option === 'people' && <People people={ data } /> }
      { data && option === 'planets' && <Planet planets={ data } /> }
      { data && option === 'starship' && <Starship starships={ data } /> }
    </div>
  ); // TODO: replace this
};

export default App;
