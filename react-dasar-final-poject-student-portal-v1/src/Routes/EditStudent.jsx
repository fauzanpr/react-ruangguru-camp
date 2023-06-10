// TODO: answer here
import { useParams } from "react-router-dom";
import NavBar from "../components/Navbar";
import { useEffect, useState } from "react";

const EditStudent = () => {
  // TODO: answer here
  const { id } = useParams();
  const [student, setStudent] = useState("");

  const fetchStudentDetail = async () => {
    try {
      const response = await fetch("http://localhost:3001/student/" + id);
      const data = await response.json();
      setStudent(data);
    } catch (error) {
      console.log("error while fetching data on edit");
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStudentDetail();
  }, [id]);
  return (
    <>
      {/* TODO: answer here */}
      <NavBar />
      <p>Halaman edit student</p>
      { student && <p>{student.fullname}</p> }
    </>
  );
};

export default EditStudent;
