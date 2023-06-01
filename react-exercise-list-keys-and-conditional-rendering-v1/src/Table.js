function Table({ mentors }) {
  let color;
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>House</th>
          <th>Email</th>
        </tr>
      </thead>
      {/* TODO: answer here */}
      {mentors ? (
        mentors.map((mentor) => {
          if (Number(mentor.id) % 2 !== 0) {
            color = "lightCyan";
          } else {
            color = "white";
          }
          return (
            <tr key={mentor.id}>
              {Number(mentor.id) % 2 !== 0 ? (
                <td style={{ backgroundColor: "lightcyan" }}>{mentor.name}</td>
              ) : (
                <td>{mentor.name}</td>
              )}
              {Number(mentor.id) % 2 !== 0 ? (
                <td style={{ backgroundColor: "lightcyan" }}>{mentor.house}</td>
              ) : (
                <td>{mentor.name}</td>
              )}
              {Number(mentor.id) % 2 !== 0 ? (
                <td style={{ backgroundColor: "lightcyan" }}>{mentor.email}</td>
              ) : (
                <td>{mentor.name}</td>
              )}
            </tr>
          );
        })
      ) : (
        <tr>
          <td>Data not available</td>
          <td>Data not available</td>
          <td>Data not available</td>
        </tr>
      )}
    </table>
  );
}

export default Table;
