import { useState, useContext } from "react";
import Student from "./Student";
import Context from "../context/StudentsState";

const Home = () => {
  const { students } = useContext(Context);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {students.map((p) => {
              return (
                <div className="card mt-2">
                  <div className="card-body">
                    <div key={p.nombre}>
                      <Student
                        key={p.nombre}
                        nombre={p.nombre}
                        edad={p.edad}
                        carrera={p.carrera}
                        hobbie={p.hobbie}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
