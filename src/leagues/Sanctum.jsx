import React from "react";
import Card from "../Components/Card";
import { SANCTUM } from "../DataBase";
import { SANCTUM_TOP } from "../TopDataBase";

export default function Sanctum() {
  const { startDate, endDate, trailer, trailerImg } = SANCTUM_TOP;
  console.log(startDate);
  return (
    <div>
      <div className="color-container">
        <div className="container">
          <div className="d-flex justify-content-between">
            <h1>{startDate}</h1>
            <h1>{endDate}</h1>
          </div>
          <a href={trailer}>
            <img src={trailerImg} alt="trailerImage" />
          </a>
        </div>
        <div className="container">
          <div className="row">
            {SANCTUM.map((elem) => (
              <Card data={elem} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
