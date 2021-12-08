import React from "react";
import meme from "../images/meme.png"

export default function Meme() {
  return (
    <main>
      <form>
        <div class='form-row'>
          <input id="first-input" name="first-input" type="text" placeholder="Shut up"/>
          <input id="second-input" name="second-input" type="text" placeholder="and take my money"/>
        </div>
        <div class='form-row'>
          <button id="get-meme" name="get-meme">Get a new meme image 🖼</button>
        </div>
      </form>
      <div className="meme">
        <img 
          className="meme-image"
          src={meme}
          alt=""
        />
        <p className="meme-text-top">Shut up</p>
        <p className="meme-text-bottom">and take my money</p>
      </div>
    </main>
  )
}