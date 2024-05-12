import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage/HomePage.js";
import Header from "./components/Header/Header.js";
import DetaiPage from "./pages/DetaiPage/DetaiPage.js";
import AdminLayout from "./components/Layouts/AdminLayout/AdminLayout.js";
import AddImage from "./pages/AddImage/AddImage.js";
import SecureGate from "./Layouts/SecureGate/SecureGate.js";
import Footer from "./components/Footer/Footer.js";
import ImageManagement from "./pages/userInfo/ImageManagement/ImageManagement.js";
import ShowUserInfo from "./pages/userInfo/ShowUserInfo.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/img-info/:imgId" element={<DetaiPage />} />
          <Route
            path="/admin"
            element={
              <SecureGate>
                <AdminLayout />
              </SecureGate>
            }
          >
            <Route path="add-image" element={<AddImage />} />
          </Route>
          <Route path="/show-user-info" element={<ShowUserInfo />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
