import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";

function App() {
  return (
    <>
      <header>
        <Header/>
      </header>
      <main>
        <Routes>
          <Route path="about" element={<About/>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
