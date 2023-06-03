const Table = (props) => {
    const deleteBtnHandler = (studentId) => {
        fetch(`http://localhost:3001/student/${studentId}`, {
            method: 'DELETE'
        });
    };

  return (
    <>
      <table id="table-student" className="table student-data-row">
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
          {props.students &&
            props.students.map((item) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.fullname}</td>
                  <td>{item.birthDate}</td>
                  <td>{item.gender}</td>
                  <td>{item.faculty}</td>
                  <td>{item.programStudy}</td>
                  <td><button data-testid={`delete-${item.id}`} className="btn-delete" onClick={() => deleteBtnHandler(item.id)}>Delete</button></td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
