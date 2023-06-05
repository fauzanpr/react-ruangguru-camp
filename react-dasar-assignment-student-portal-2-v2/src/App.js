import { useEffect, useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";
import Header from "./components/Header";

const App = () => {
  // TODO: answer here
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  // useEffect(() => {
    // const getData = async () => {
    //   await fetch("http://localhost:3001/student")
    //   .then((res) => res.json())
    //   .then((res) => {
    //     setIsLoading(false);
    //     setStudents(res);
    //   }).catch((e) => {
    //     console.log(e);
    //     setIsLoading(false);
    //   });
    // };
  //   const getData = async () => {
  //     try {
  //       const res = await fetch("http://localhost:3001/student");
  //       console.log('masuk sini');
  //       const data = await res.json();
  //       setStudents(data);
  //       setLoading(false);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   getData();
  // }, []);

  return (
    <>
      <div className="container">
        <Header />
        <main>
          <Form />
          <Table />
        </main>
      </div>
    </>
  );
};

export default App;
