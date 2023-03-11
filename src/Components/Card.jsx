import React from "react";
import { LEGION } from "../DataBase";

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
    core,
    investment,
    content,
    youtubeGameplay,
    exaltedPng,
    items,
  } = props.data;

  return (
    <div className="col-md-6">
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
          <p>
            {/* {core} */}
            <span>Mandatory uniques:</span>
            <p>
              {items.map((item) => (
                <a key={item.linkUnique} href={item.linkUnique}>
                  {item.nameUnique}
                </a>
              ))}
            </p>
          </p>
          <p>
            {investment}
            <img className="currency" src={exaltedPng} alt="" />
          </p>
          <p>{content}</p>
          <a href={youtubeGameplay}>Youtube Gameplay</a>
        </div>
      </div>
    </div>
  );
}

{
  /* <a href="https://www.poewiki.net/wiki/Cospri%27s_Malice">Cospri's Malice,</a>
                  <a href="https://www.poewiki.net/wiki/The_Pandemonius">The Pandemonius,</a>
                  <a href="https://www.poewiki.net/wiki/Carcass_Jack">Carcass Jack,</a>
                  <a href="https://www.poewiki.net/wiki/Lycosidae">Lycosidae</a> */
}

{
  /* <a href="https://www.poewiki.net/wiki/Starforge">Starforge,</a>
                  <a href="https://www.poewiki.net/wiki/Abyssus">Abyssus,</a>
                  <a href="https://www.poewiki.net/wiki/Carcass_Jack">Carcass Jack,</a>
                  <a href="https://www.poewiki.net/wiki/Belly_of_the_Beast">Belly of the Beast,</a>
                  <a href="https://www.poewiki.net/wiki/Carnage_Heart">Carnage Heart,</a>
                  <a href="https://www.poewiki.net/wiki/Devoto%27s_Devotion">Devoto's Devotion</a> */
}
