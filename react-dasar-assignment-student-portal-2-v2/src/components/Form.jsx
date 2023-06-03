import { useEffect, useState } from "react";

const Form = (props) => {
  const [fullname, setFullname] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("Male");
  const [programStudy, setPrody] = useState("Ekonomi");
  const [isReload, setIsReload] = useState(false);
  // TODO: answer here
  const cekFaculty = (prody) => {
    if (!prody) return false;
    if (prody === "Ekonomi" || prody === "Manajemen" || prody === "Akuntansi")
      return "Fakultas Ekonomi";
    else if (
      prody === "Administrasi Publik" ||
      prody === "Administrasi Bisnis" ||
      prody === "Hubungan Internasional"
    )
      return "Fakultas Ilmu Sosial dan Politik";
    else if (prody === "Teknik Sipil" || prody === "Arsitektur")
      return "Fakultas Teknik";
    else if (
      prody === "Matematika" ||
      prody === "Fisika" ||
      prody === "Informatika"
    )
      return "Fakultas Teknologi Informasi dan Sains";
  };
  const submitFormHandle = () => {
    // e.preventDefault();
    const faculty = cekFaculty(programStudy);
    const students = { fullname, birthDate, gender, programStudy, faculty };
    fetch("http://localhost:3001/student", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(students),
    }).then(() => {
      setIsReload(true);
    });
  };

  return (
    <>
      <form id="form-student" className="form">
        <div className="form-item">
          <label htmlFor="input-name">Fullname</label>
          <input
            type="text"
            id="input-name"
            name="fullname"
            data-testid="name"
            onChange={(e) => setFullname(e.target.value)}
          />
        </div>
        <div className="form-item">
          <label htmlFor="input-date">Birth Date</label>
          <input
            type="date"
            id="input-date"
            name="birthDate"
            data-testid="date"
            onChange={(e) => setBirthDate(e.target.value)}
          />
        </div>
        <div className="form-item">
          <label htmlFor="input-gender">Gender</label>
          <select
            name="gender"
            id="input-gender"
            data-testid="gender"
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="form-item">
          <label htmlFor="input-prody">Program Study</label>
          <select
            name="programStudy"
            id="input-prody"
            data-testid="prody"
            onChange={(e) => setPrody(e.target.value)}
          >
            <option value="Ekonomi">Ekonomi</option>
            <option value="Manajemen">Manajemen</option>
            <option value="Akuntansi">Akuntansi</option>
            <option value="Administrasi Publik">Administrasi Publik</option>
            <option value="Administrasi Bisnis">Administrasi Bisnis</option>
            <option value="Hubungan Internasional">
              Hubungan Internasional
            </option>
            <option value="Teknik Sipil">Teknik Sipil</option>
            <option value="Arsitektur">Arsitektur</option>
            <option value="Matematika">Matematika</option>
            <option value="Fisika">Fisika</option>
            <option value="Informatika">Informatika</option>
          </select>
        </div>
        <input
          type="submit"
          value="Add student"
          id="add-btn"
          className="submit"
          data-testid="submit"
          onClick={submitFormHandle}
        />
      </form>
    </>
  );
};

export default Form;
