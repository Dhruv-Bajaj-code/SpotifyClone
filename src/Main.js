import React from "react";
import "../public/style.css";
import Tile from "./tile.js";
import Bigfile from "./bigfile.js";
import MainFooter from "./MainFooter.js";
import SecondBidtile from "./SecondBidtile.js";

export default function () {
  return (
    <div className="Main">
      <h1>Good Morning</h1>
      <div className="for--you">
        <Tile className="tile3" />
        <Tile className="tile3" />
        <Tile className="tile3" />
      </div>
      <div className="for--you">
        <Tile className="tile3" />
        <Tile className="tile3" />
        <Tile className="tile3" />
      </div>
      <div className="for--you">
        <Tile className="tile3" />
        <Tile className="tile3" />
        <Tile className="tile3" />
      </div>
      <h2>Your Friends are listening to</h2>
      <div className="ArtistTile">
        <SecondBidtile />
        <SecondBidtile />
        <SecondBidtile />
        <SecondBidtile />
      </div>
      <br />
      <h2>Maid For Dhruv Bajaj</h2>
      <div className="ArtistTile">
        <Bigfile />
        <Bigfile />
        <Bigfile />
        <Bigfile />
      </div>
      <div>
        <MainFooter />
      </div>
    </div>
  );
}
