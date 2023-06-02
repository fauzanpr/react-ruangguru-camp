import { useEffect, useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";
import Header from "./components/Header";

const App = () => {
  // TODO: answer here

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
