import React from "react";
import { LEGION } from "../DataBase";
import { METAMORPH } from "../DataBase";

export default function Card(props) {
  const {
    cardImage,
    buildName,
    patchName,
    bossDamage,
    clearSpeed,
    survability,
    leagueMechanic,
    pro,
    cons,
    investment,
    content,
    youtubeGameplay,
    exaltedPng,
    items,
  } = props.data;

  return (
    <div className="card mx-auto bg-dark" style={{ width: "23rem" }}>
      <img src={cardImage} className="card-img-top" alt="..." />
      <div className="card-body">
        <h4 className="card-title">{buildName}</h4>
        <h5 className="card-text">{patchName}</h5>
        <p>{bossDamage}</p>
        <p>{clearSpeed}</p>
        <p>{survability}</p>
        <p>{leagueMechanic}</p>
        <p>{pro}</p>
        <p>{cons}</p>
        {/* {core} */}
        <span>Mandatory uniques:</span>
        <p>
          {items.map((item) => (
            <a className="uniques" key={item.linkUnique} href={item.linkUnique}>
              {item.nameUnique},
            </a>
          ))}
        </p>
        {investment}
        <img className="currency" src={exaltedPng} alt="" />
        <p>{content}</p>
        <a href={youtubeGameplay}>Youtube Gameplay</a>
      </div>
    </div>
  );
}
