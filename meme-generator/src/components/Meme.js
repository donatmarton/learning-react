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
  function changeText(event) {
    const {name, value} = event.target
    setMeme( prevMeme => {
      return {
        ...prevMeme, 
        [name]: value} 
    })
  }
  return (
    <main>
      <div className='form-row'>
        <input 
          value={meme.topText} 
          onChange={changeText} 
          name="topText" 
          id="first-input" 
          type="text" 
          placeholder="Shut up"
        />
        <input 
          value={meme.bottomText} 
          onChange={changeText} 
          name="bottomText" 
          id="second-input" 
          type="text" 
          placeholder="and take my money"
        />
      </div>
      <div className='form-row'>
        <button 
          onClick={getMemeImage} 
          id="get-meme" 
          name="get-meme"
        >
          Get a new meme image 🖼
        </button>
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