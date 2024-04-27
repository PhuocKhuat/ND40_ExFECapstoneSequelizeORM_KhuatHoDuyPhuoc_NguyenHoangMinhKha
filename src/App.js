
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage/HomePage.js";
import Header from "./components/Header/Header.js";
import DetaiPage from "./pages/DetaiPage/DetaiPage.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/img-info/:imgId" element={<DetaiPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
