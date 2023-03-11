import React from "react";

export default function Siege() {
  return (
    <div className="color-container">
      <div class="container">
        <div class="d-flex justify-content-between">
          <h1>Archnemesis Release Date: 2022-02-04</h1>
          <h1>End Date: 2022-05-10</h1>
        </div>
        <a href="https://www.youtube.com/watch?v=C4BLh5l8VA0&t=0s&ab_channel=PathofExile">
          <img src="https://news.xbox.com/en-us/wp-content/uploads/sites/2/2022/01/1.jpg" alt="" />
        </a>
        <div class="row">
          <div class="card mx-auto bg-dark" style={{ width: "23rem" }}>
            <img src="../src/img/Inquisitor.webp" class="card-img-top" alt="..." />
            <div class="card-body">
              <h4 class="card-title">Righteous Fire Inquisitor</h4>
              <h5 class="card-text">Patch: 3.17 Archnemesis (Outdated)</h5>
              <p>Boss Damage: 7/10</p>
              <p>Clear Speed: 8/10</p>
              <p>Suvability: 7/10</p>
              <p>League Mechanic: 8/10</p>
              <p>Pro: Walking Simulator,League starter, Tanky</p>
              <p>Cons: Lacking boss damage</p>
              <p>
                Core:
                <span>Full rare or: </span>
                <a href="https://www.poewiki.net/wiki/Legacy_of_Fury">Legacy of Fury</a>
              </p>
              <p>
                Investment: 10
                <img class="currency" src="../src/img/Exalted.webp" alt="exalted" />
                Exalted Orb
              </p>
              <p>Content: Guardians,Shaper</p>
              <a href="https://www.youtube.com/watch?v=GKdRYCt7gJk&ab_channel=Tenkiei">Youtube Gameplay</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
