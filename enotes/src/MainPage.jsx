import { Link } from "react-router-dom";
import React, { useState } from "react";
import { nanoid } from "nanoid";

const listCours = [
  { name: "ALGO", seances: [{ _id: 1234, date: "10-05-2022" }] },
  { name: "WEB", seances: [{ _id: 1234, date: "10-05-2022" }] },
  { name: "MOBILE", seances: [] },
  { name: "CLOUD", seances: [] },
  { name: "SECURITE", seances: [] },
  { name: "ML", seances: [] },
];

const MainPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem 1rem",
      }}
    >
      <section>
        <button type="submit" className="btn" onClick={() => {}}>
          Professeur
        </button>
        <button className="btn">Coordinateur</button>
      </section>

      <div
        style={{
          display: "flex",
        }}
      >
        <section
          className="form"
          style={{
            display: "flex",
            flexDirection: "column",
            width: "fit-content",
            margin: "1rem",
          }}
        >
          <h5 style={{ marginBottom: "1rem" }}>Mes cours</h5>
          {listCours.map((cours) => {
            return (
              <button
                className="btn"
                style={{ backgroundColor: "transparent", color: "black" }}
                key={nanoid()}
              >
                {cours.name}
              </button>
            );
          })}
        </section>

        <section
          className="form"
          style={{
            display: "flex",
            margin: "1rem auto",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <h5 style={{ marginBottom: "1rem" }}>Mes cours</h5>
          {listCours.map((cours) => {
            return (
              cours.seances.length > 0 && (
                <div key={nanoid()}>
                  <button
                    className="btn"
                    style={{
                      backgroundColor: "transparent",
                      color: "black",
                      width: "100%",
                    }}
                  >
                    {cours.seances.map((seance, index) => {
                      return (
                        <p key={nanoid()}>
                          séance {index} - date: {seance.date}
                        </p>
                      );
                    })}
                  </button>
                </div>
              )
            );
          })}
          <button className="btn">ADD</button>
        </section>
      </div>
    </div>
  );
};
export default MainPage;
