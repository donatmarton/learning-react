import React from "react";
import defaultMeme from "../images/meme.png"
import memesData from "../memesData"

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    image: defaultMeme
  });
  const [allMemeImages, setAllMemeImages] = React.useState(memesData);
  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomIndex = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomIndex].url;
    setMeme( (prevMeme) => ({...prevMeme, image:url}));
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
          src={meme.image}
          alt=""
        />
        <p className="meme-text-top">{meme.topText}</p>
        <p className="meme-text-bottom">{meme.bottomText}</p>
      </div>
    </main>
  )
}