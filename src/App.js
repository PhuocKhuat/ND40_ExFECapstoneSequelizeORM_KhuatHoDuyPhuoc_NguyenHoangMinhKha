import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage/HomePage.js";
import Header from "./components/Header/Header.js";
import DetaiPage from "./pages/DetaiPage/DetaiPage.js";
import AdminLayout from "./components/Layouts/AdminLayout/AdminLayout.js";
import AddImage from "./pages/AddImage/AddImage.js";
import UserInfo from "./pages/userInfo/UserInfo.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/img-info/:imgId" element={<DetaiPage />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="add-image" element={<AddImage />} />
          </Route>
          <Route path="/user-info" element={<UserInfo/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
