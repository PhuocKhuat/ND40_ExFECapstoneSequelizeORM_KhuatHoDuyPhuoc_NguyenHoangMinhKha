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
import Users from "./pages/AdminPage/User/Users.js";
import SecureGate from "./Layouts/SecureGate/SecureGate.js";
import SearchImagePage from "./pages/SearchImagePage/SearchImagePage.js";
import Layout from "./Layouts/Layout/Layout.js";
import LayoutNoMessage from "./Layouts/Layout/LayoutNoMessage.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
          </Route>

          <Route path="/" element={<LayoutNoMessage />}>
            <Route path="/img-info/:imgId" element={<DetaiPage />} />
            <Route
              path="/show-user-info"
              element={
                <PrivateLayout>
                  <ShowUserInfo />
                </PrivateLayout>
              }
            />
            <Route
              path="/add-image"
              element={
                <PrivateLayout>
                  <AddImage />
                </PrivateLayout>
              }
            />
            <Route
              path="/admin"
              element={
                <SecureGate>
                  <AdminLayout />
                </SecureGate>
              }
            >
              <Route path="users" element={<Users />} />
            </Route>
            <Route
              path="/search-image/:imgName"
              element={<SearchImagePage />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
