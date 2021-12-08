import React from "react";
import defaultMeme from "../images/meme.png"
import memesData from "../memesData"

export default function Meme() {
  const [meme, setMeme] = React.useState(defaultMeme);
  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomIndex = Math.floor(Math.random() * memesArray.length);
    setMeme(memesArray[randomIndex].url);
}
  return (
    <main>
      <div class='form-row'>
        <input id="first-input" name="first-input" type="text" placeholder="Shut up"/>
        <input id="second-input" name="second-input" type="text" placeholder="and take my money"/>
      </div>
      <div class='form-row'>
        <button onClick={getMemeImage} id="get-meme" name="get-meme">Get a new meme image 🖼</button>
      </div>
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