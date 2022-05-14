import "./App.css";
import { MainPage, LoginPage } from "./pages/MainPage";
import background from "./image/circle.jpeg";

function App() {
  return (
    <div>
      <div
        className="App"
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <MainPage />
    </div>
  );
}

export default App;
