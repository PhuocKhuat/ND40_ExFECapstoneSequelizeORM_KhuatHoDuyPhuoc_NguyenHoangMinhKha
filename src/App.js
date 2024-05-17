import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage/HomePage.js";
import Header from "./components/Header/Header.js";
import DetaiPage from "./pages/DetaiPage/DetaiPage.js";

import AddImage from "./pages/AddImage/AddImage.js";
import Footer from "./components/Footer/Footer.js";
import ShowUserInfo from "./pages/userInfo/ShowUserInfo.js";
import AdminLayout from "./Layouts/AdminLayout/AdminLayout.js";
import PrivateLayout from "./Layouts/PrivateLayout/PrivateLayout.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/img-info/:imgId" element={<DetaiPage />} />
          <Route path="/admin">
            <Route path="management" />
          </Route>
          <Route
            path="/add-image"
            element={
              <PrivateLayout>
                <AddImage />
              </PrivateLayout>
            }
          />
          <Route
            path="/show-user-info"
            element={
              <PrivateLayout>
                <ShowUserInfo />
              </PrivateLayout>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
