import "./Header.scss";
import TrollFace from "../../assets/icons/TrollFace.png";

export default function Header() {
  return (
    <header className="header">
      <img src={TrollFace} className="header__logo" alt="TrollFace Icon" />
      <h2 className="header__title">Meme Generator</h2>
    </header>
  );
}
