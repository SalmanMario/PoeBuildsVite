import React from "react";

export default function Home() {
  return (
    <div className="color-container">
      <div className="container">
        <img
          src="https://images5.alphacoders.com/547/thumb-1920-547295.jpghttps://images5.alphacoders.com/547/thumb-1920-547295.jpg"
          alt="wallpaper"
        />
        <h1 className="text-center">Path Of Exile Builds</h1>
        <h2 className="text-center mb-5">Current Patch: 3.20</h2>
        <div className="row">
          <div className="col-lg-6">
            <h2>
              Leagues I played:
              <p>Legion: 3.7 (First League)</p>
              <p>Metamorph: 3.9</p>
              <p>Delirium: 3.10</p>
              <p>Harvest: 3.11</p>
              <p>Echos of the Atlas: 3.13</p>
              <p>Ultimatum: 3.14</p>
              <p>Expedition: 3.15</p>
              <p>Siege of the Atlas: 3.17</p>
              <p>Sentinel: 3.18</p>
              <p>Lake of Kalandra: 3.19</p>
              <p>Sanctum: 3.20</p>
            </h2>
          </div>
          <div className="col-lg-6">
            <h2>
              Leagues I skiped:
              <p>Blight: 3.8</p>
              <p>Heist: 3.12</p>
              <p>Scourge: 3.16</p>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
