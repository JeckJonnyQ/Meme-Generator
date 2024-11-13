import { useEffect, useState } from "react";
import "./Meme.scss";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function getMemeImage(event) {
    event.preventDefault();
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main className="main">
      <form className="form">
        <div className="form__top-container">
          <label htmlFor="top-text" className="label__top-text">
            Top Text
          </label>

          <input
            type="text"
            id="top-text"
            className="form__input"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />
        </div>

        <div className="form__bottom-container">
          <label htmlFor="bottom-text" className="label__bottom-text">
            Bottom Text
          </label>

          <input
            type="text"
            id="bottom-text"
            className="form__input"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />
        </div>

        <button className="form__btn" onClick={getMemeImage}>
          Get a new meme image
        </button>
      </form>

      <div className="meme">
        <img src={meme.randomImage} alt="Meme Image" className="meme__img" />
        <h2 className="meme__text top">{meme.topText}</h2>
        <h2 className="meme__text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
