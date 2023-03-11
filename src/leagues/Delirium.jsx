import React from "react";

export default function Delirium() {
  return (
    <div className="color-container">
      <div class="container">
        <div class="d-flex justify-content-between">
          <h1>Delirium Release Date: 2020-03-13</h1>
          <h1>End Date: 2020-06-15</h1>
        </div>
        <a href="https://www.youtube.com/watch?v=fapKac1eA6Y&ab_channel=PathofExile">
          <img src="https://i.ytimg.com/vi/fapKac1eA6Y/maxresdefault.jpg" alt="" />
        </a>

        <div class="row">
          <div class="">
            <div class="card mx-auto bg-dark" style={{ width: "23rem" }}>
              <img src="../src/img/Champion.webp" class="card-img-top" alt="..." />
              <div class="card-body">
                <h4 class="card-title">Cyclone Champion Impale</h4>
                <h5 class="card-text">Patch: 3.10 Delirium (Not playable anymore)</h5>
                <p>Boss Damage: 8/10</p>
                <p>Clear Speed: 7/10</p>
                <p>Suvability: 7/10</p>
                <p>League Mechanic: 7/10</p>
                <p>Pro: Spin to win,Stun Immunity,Area of Effect,Begginer friendly</p>
                <p>Cons: Melee build,Physical reflect maps</p>
                <p>
                  Core:
                  <span>Full rare or: </span>
                  <a href="https://www.poewiki.net/wiki/Abyssus">Abyssus,</a>
                  <a href="https://www.poewiki.net/wiki/Paradoxica">Vaal Paradoxica,</a>
                  <a href="https://www.poewiki.net/wiki/Devoto%27s_Devotion">Devoto's Devotion,</a>
                  <a href="https://www.poewiki.net/wiki/Ryslatha%27s_Coil">Ryslatha's Coil</a>
                </p>
                <p>
                  Investment: 15
                  <img class="currency" src="../src/img/Exalted.webp" alt="exalted" />
                  Exalted Orb
                </p>
                <p>Content: Guardians,Shaper,Elder</p>
                <a href="https://www.youtube.com/watch?v=13mTRa4Y5RA&ab_channel=Kidze">Youtube Gameplay</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
