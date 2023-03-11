import React from "react";

export default function Expedition() {
  return (
    <div className="color-container">
      <div class="container">
        <div class="d-flex justify-content-between">
          <h1>Expedition Release Date: 2021-07-23</h1>
          <h1>End Date: 2021-10-18</h1>
        </div>
        <a href="https://www.youtube.com/watch?v=mT_aoGoMm50&ab_channel=PathofExile">
          <img src="https://cdn.player.one/sites/player.one/files/2021/07/29/path-exile-expedition.jpg" alt="" />
        </a>
        <div class="row">
          <div class="">
            <div class="card mx-auto bg-dark" style={{ width: "23rem" }}>
              <img src="../src/img/Raider.webp" class="card-img-top" alt="..." />
              <div class="card-body">
                <h4 class="card-title">Spectral Shield Throw Cold Conversion Raider</h4>
                <h5 class="card-text">Patch: 3.15 Expedition (Not playable anymore)</h5>
                <p>Boss Damage: 7/10</p>
                <p>Clear Speed: 8/10</p>
                <p>Suvability: 7/10</p>
                <p>League Mechanic: 8/10</p>
                <p>Pro:Fast, Begginer friendly</p>
                <p>Cons: Melee build,Physical Reflect maps</p>
                <p>
                  Core:
                  <span>Full rare or: </span>
                  <a href="https://www.poewiki.net/wiki/Seething_Fury">Seething Fury,</a>
                  <a href="https://www.poewiki.net/wiki/Hrimsorrow">Hrimsorrow,</a>
                  <a href="https://www.poewiki.net/wiki/Darkray_Vectors">Darkray Vectors,</a>
                  <a href="https://www.poewiki.net/wiki/The_Taming">The Taming</a>
                </p>
                <p>
                  Investment: 10
                  <img class="currency" src="../src/img/Exalted.webp" alt="exalted" />
                  Exalted Orb
                </p>
                <p>Content: Guardians,Shaper</p>
                <a href="https://www.youtube.com/watch?v=E0b8vjstfRA&t=0s&ab_channel=Crouching_Tuna">
                  Youtube Gameplay
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
