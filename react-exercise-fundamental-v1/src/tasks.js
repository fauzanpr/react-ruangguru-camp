import { useState } from "react";

function Task1() {
  return (
    <div className="basic_component">
      <h1>Halo dunia!</h1>
    </div>
  );
}

function Task1_1(props) {
  return <h1>{props.name}</h1>;
}

function Task2() {
  const [state, setState] = useState("Klik tombol di bawah");

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => setState("Tombol telah di-klik!")}>
        Klik saya!
      </button>
    </div>
  );
}

const students = [
  {
    name: "John Doe",
    age: 20,
    dropout: false,
  },
  {
    name: "Jane Doe",
    age: 21,
    dropout: true,
  },
  {
    name: "John Smith",
    age: 22,
    dropout: false,
  },
  {
    name: "Jane Smith",
    age: 23,
    dropout: true,
  },
];

function Task3() {
  return (
    <>
      {students &&
        students.map((student) => {
          return (
            <h2>
              {student.name} - {student.age}
            </h2>
          );
        })}
    </>
  );
}

function Task3_1() {
  return (
    <div>
      {students.map((student) => {
        if (student.dropout === true) return;
        return (
          <h2>
            {student.name} - {student.age}
          </h2>
        );
      })}
    </div>
  );
}

function Task4() {
  const [status, setStatus] = useState(true);
  return (
    <div>
      {status && <p>Klik tombol di-bawah untuk menghapus elemen ini</p>}
      {/* TODO: replace this */}
      <button onClick={() => setStatus(false)}>Hapus</button>{" "}
      {/* TODO: replace this */}
    </div>
  );
}

export { Task1, Task1_1, Task2, Task3, Task3_1, Task4 };
