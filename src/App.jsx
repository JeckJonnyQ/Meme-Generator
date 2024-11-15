import "./App.css";
import Header from "./components/Header/Header";
import Meme from "./components/Meme/Meme";

function App() {
  return (
    <div className="meme-generator">
      <Header />
      <Meme />
    </div>
  );
}

export default App;
