import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const NewForm = () => {
  // const { setIsMainPage } = useGlobalContext();
  // useEffect(() => setIsMainPage(false), []);

  const navigate = useNavigate();
  const [data, setData] = useState({
    cours: "",
    date: "",
    HD: "",
    HF: "",
    objectifs: "",
    AP: "",
    remarques: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setData({ ...data });
    axios
      .post("", data)
      .then(() => console.log("added successfully"))
      .catch((e) => console.log(e));
    navigate("/");
  };
  const handle = (e) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="cours"
          placeholder="cours"
          className="form-input"
          onChange={(e) => handle(e)}
          value={data.cours}
          required={true}
        />

        <input
          type="date"
          name="date"
          placeholder="date"
          className="form-input"
          onChange={(e) => handle(e)}
          value={data.date}
          required={true}
        />

        <input
          type="time"
          name="HD"
          placeholder="HD"
          className="form-input"
          onChange={(e) => handle(e)}
          value={data.date}
          required={true}
        />

        <input
          type="time"
          name="HF"
          placeholder="HF"
          className="form-input"
          onChange={(e) => handle(e)}
          value={data.HF}
          required={true}
        />
        <textarea
          type="text"
          name="objectifs"
          placeholder="objectifs"
          className="form-textarea"
          onChange={(e) => handle(e)}
          value={data.objectifs}
          required={true}
        />
        <textarea
          type="text"
          name="AP"
          placeholder="AP"
          className="form-textarea"
          onChange={(e) => handle(e)}
          value={data.AP}
          required={true}
        />
        <textarea
          type="text"
          name="remarques"
          placeholder="remarques"
          className="form-textarea"
          onChange={(e) => handle(e)}
          value={data.remarques}
        />

        <button className="btn">Add</button>
        <Link to="/">
          <button className="btn">Home</button>
        </Link>
      </form>
    </div>
  );
};
export default NewForm;
