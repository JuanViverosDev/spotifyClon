import { BrowserRouter, Route, Routes } from "react-router-dom";
import Canal from "./app/Canal/Canal";
import Home from "./app/Home/Home";
import Player from "./app/Player/Player";
import Podcasts from "./app/Podcasts/Podcasts";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/canal/:id" element={ <Canal/> }/>
          <Route path="/player/:id" element={ <Player/> }/>
          <Route path="/podcasts" element={ <Podcasts/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
