const Form = () => {
    return (
        <>
        <form id="form-student" className="form">
            <div className="form-item">
                <label htmlFor="input-name">Fullname</label>
                <input type="text" id="input-name" name="fullname" />
            </div>
            <div className="form-item">
                <label htmlFor="input-date">Birth Date</label>
                <input type="date" id="input-date" name="birthdate" />
            </div>
            <div className="form-item">
                <label htmlFor="input-gender">Gender</label>
                <select name="gender" id="input-gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
            <div className="form-item">
                <label htmlFor="input-prody">Program Study</label>
                <select name="gender" id="input-prody">
                    <option value="ekonomi">Ekonomi</option>
                    <option value="manajemen">Manajemen</option>
                    <option value="akuntansi">Akuntansi</option>
                    <option value="administrasiPublik">Administrasi Publik</option>
                    <option value="administrasiBisnis">Administrasi Bisnis</option>
                    <option value="hubunganInternasional">Hubungan Internasional</option>
                    <option value="teknikSipil">Teknik Sipil</option>
                    <option value="arsitektur">Arsitektur</option>
                    <option value="matematika">Matematika</option>
                    <option value="fisika">Fisika</option>
                    <option value="informatika">Informatika</option>
                </select>
            </div>
            <input type="submit" value="Add student" id="add-btn" className="submit" />
        </form>
        </>
    );
};

export default Form;
