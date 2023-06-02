const Table = (props) => {
  // TODO: answer here
  return (
    <>
      <table id="table-student" className="table">
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
                  <td>Delete</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
