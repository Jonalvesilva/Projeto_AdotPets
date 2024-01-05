import "./App.css";
import { Appbar } from "./components/Appbar";
import { Home } from "./routes/Home";
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <HashRouter>
        <Appbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
