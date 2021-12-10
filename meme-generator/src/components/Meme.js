import React from "react";
import defaultMeme from "../images/meme.png"


export default function Meme() {

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    image: defaultMeme
  });
  const [allMemes, setAllMemes] = React.useState(null);

  function getMemeImage() {
    const randomIndex = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomIndex].url;
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

  React.useEffect( () => {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(memes => setAllMemes(memes.data.memes))
  }, []);

  return (
    <main>
      <div className='form-row'>
        <input 
          value={meme.topText} 
          onChange={changeText} 
          name="topText" 
          id="first-input" 
          type="text" 
          placeholder="Top text"
        />
        <input 
          value={meme.bottomText} 
          onChange={changeText} 
          name="bottomText" 
          id="second-input" 
          type="text" 
          placeholder="Bottom text"
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