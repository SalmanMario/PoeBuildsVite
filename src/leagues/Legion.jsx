import React from "react";
import Card from "../Components/Card";
import { LEGION } from "../DataBase";
import { LEGION_TOP } from "../TopDataBase";

export default function Legion() {
  const { startDate, endDate, trailer, trailerImg } = LEGION_TOP;
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
            {LEGION.map((elem) => (
              <Card data={elem} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
