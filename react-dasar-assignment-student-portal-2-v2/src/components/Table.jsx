import { useEffect, useState } from "react";

const Table = () => {
  const deleteBtnHandler = async (studentId) => {
    await fetch(`http://localhost:3001/student/${studentId}`, {
      method: "DELETE",
    });
    isReload(!reload);
  };
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reload, isReload] = useState(false);

  useEffect(() => {
    const getStudents = async () => {
      const response = await fetch("http://localhost:3001/student/");
      const data = await response.json();
      setStudents(data);
      setLoading(false);
      isReload(true);
    };
    getStudents();
  }, [reload]);

  return (
    <>
      <table id="table-student" className="student-data-row table">
        <thead>
          <tr>
            <th>No</th>
            <th>Full Name</th>
            <th>Birth Date</th>
            <th>Gender</th>
            <th>Faculty</th>
            <th>Program Study</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <p>Loading....</p>
          ) : (
            students.map((student) => {
              return (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.fullname}</td>
                  <td>{student.birthDate}</td>
                  <td>{student.gender}</td>
                  <td>{student.faculty}</td>
                  <td>{student.programStudy}</td>
                  <td>
                    <button
                      data-testid={`delete-${student.id}`}
                      className="btn-delete"
                      onClick={() => deleteBtnHandler(student.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </>
  );
};

export default Table;
