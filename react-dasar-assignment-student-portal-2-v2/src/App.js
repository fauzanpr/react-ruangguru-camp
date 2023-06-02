import { useEffect, useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";
import Header from "./components/Header";

const App = () => {
  // TODO: answer here
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch('http://localhost:3001/student')
      .then((res) => res.json())
      .then((res) => {
        setIsLoading(false);
        setStudents(res);
      });
  }, []);

  return (
    <>
      <div className="container">
        <Header />
        <main>
          <Form />
          {isLoading ? <p>Loading...</p> : <Table students={students} />}
        </main>
      </div>
    </>
  );
};

export default App;
