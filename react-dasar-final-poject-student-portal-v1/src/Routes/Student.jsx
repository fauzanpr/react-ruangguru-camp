// TODO: answer here

import { useEffect, useState } from "react";
import NavBar from "../components/Navbar";
import { Link } from "react-router-dom";

const Student = () => {
  // TODO: answer here
  const url = "http://localhost:3001/student";
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchStudent = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setStudents(data);
      if (loading) setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteBtn = async (id) => {
    try {
      await fetch(url + `/${id}`, {
        method: "DELETE",
      });
      await fetchStudent();
    } catch (error) {
      console.log("error from delete");
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStudent();
  }, []);

  return (
    <>
      {/* TODO: answer here */}
      <NavBar />
      <p>Halaman student</p>
      {loading && <p>Loading ...</p>}
      {!loading && (
        <table id="table-student">
          <thead>
            <tr>
              <th>No</th>
              <th>Full Name</th>
              <th>Faculty</th>
              <th>Program Study</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => {
              return (
                <tr className="student-data-row" key={student.id}>
                  <td>{student.id}</td>
                  <td>
                    <Link to={`${student.id}`}>{student.fullname}</Link>
                  </td>
                  <td>{student.faculty}</td>
                  <td>{student.programStudy}</td>
                  <td>
                    <button
                      data-testid={`delete-${student.id}`}
                      onClick={() => handleDeleteBtn(student.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Student;
