import { useParams } from "react-router-dom";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { nanoid } from "nanoid";
const Seance = () => {
  const { id } = useParams();

  // fetching data with axios
  const seance = {
    _id: id,
    cours: "ML",
    number: 1,
    date: "10-05-2023",
    HD: "9:00",
    HF: "12:30",
    objectifs: ["objectif1", "objectif2", "objectif3"],
    AP: ["content", "content", "content"],
    remarques: ["remarque1", "remarque2", "remarque3"],
  };
  //

  return (
    <div className="seance">
      <h3 style={{ margin: "0.5rem" }}>
        <b>{seance.cours}</b>
      </h3>
      <h5 style={{ margin: "0.5rem", color: "#343434" }}>
        <b>séance {seance.number}</b>
      </h5>
      <p style={{ margin: "0.5rem", color: "#343434" }}>
        <b>Date: {seance.date}</b>
      </p>
      <p style={{ margin: "1rem", color: "#343434" }}>
        Heure début: {seance.HD} | Heure fin: {seance.HF}
      </p>
      <h5>
        <b>Objectifs</b>
      </h5>
      <div className="form">
        <ol>
          {seance.objectifs.map((objectif) => {
            return <li key={nanoid()}>{objectif}</li>;
          })}
        </ol>
      </div>
      {/* //// */}
      <h5>
        <b>A.P</b>
      </h5>
      <div className="form">
        <ol>
          {seance.AP.map((objectif) => {
            return <li key={nanoid()}>{objectif}</li>;
          })}
        </ol>
      </div>

      {/*  */}
      <h5>
        <b>Reamarques</b>
      </h5>
      <div className="form">
        <ol>
          {seance.remarques.map((objectif) => {
            return <li key={nanoid()}>{objectif}</li>;
          })}
        </ol>
      </div>
      <div className="edit_delete">
        <AiFillEdit className="edit" />
        <AiFillDelete className="delete" />
      </div>
    </div>
  );
};
export default Seance;
