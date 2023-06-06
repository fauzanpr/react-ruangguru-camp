import { useEffect, useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";
import Header from "./components/Header";

const App = () => {
  // TODO: answer here
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("http://localhost:3001/student");
        const data = await res.json();
        setStudents(data);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  });

  return (
    <>
      <div className="container">
        <Header />
        <main>
          <Form />
          {loading ? <p>Loading....</p> : <Table students={students} />}
        </main>
      </div>
    </>
  );
};

export default App;
