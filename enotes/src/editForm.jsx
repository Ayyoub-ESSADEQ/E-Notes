import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const EditForm = () => {
  ///
  const { id } = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [data, setData] = useState({
    owner: "",
    title: "",
    filiere: "",
    year: "",
    tags: { Math: false, PC: false, Info: false, SI: false },
    linkImg: "",
    linkPresentation: "",
    linkMcot: "",
    content: "",
  });

  const get = useQuery({
    queryKey: ["seances"],
    queryFn: async () => {
      try {
        const { data } = await axios.get(`server/${id}`);
        setData(data.seance);
        return data;
      } catch (e) {
        console.log(e);
      }
    },
  });

  const { mutate: editSeance } = useMutation({
    mutationFn: (data) => {
      axios
        .patch(`server/${id}`, data)
        .then(() => console.log("updated successfully"))
        .catch((e) => console.log(e));
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["seances"] });
      navigate("/");
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setData({ ...data, year: parseInt(data.year) });
    editSeance(data);
  };
  const handle = (e) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  };

  const handleTags = (e) => {
    const newData = { ...data };
    newData.tags[e.target.name] = e.target.checked;
    console.log(newData.tags);
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
          className="form-input"
          onChange={(e) => handle(e)}
          value={data.objectifs}
          required={true}
        />
        <textarea
          type="text"
          name="AP"
          placeholder="AP"
          className="form-input"
          onChange={(e) => handle(e)}
          value={data.AP}
          required={true}
        />
        <textarea
          type="text"
          name="remarques"
          placeholder="remarques"
          className="form-input"
          onChange={(e) => handle(e)}
          value={data.remarques}
        />

        <button className="btn">Edit</button>
        <Link to="/">
          <button className="btn">Home</button>
        </Link>
      </form>
    </div>
  );
};
export default EditForm;
