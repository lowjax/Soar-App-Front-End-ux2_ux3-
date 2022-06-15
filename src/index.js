import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "./App"
import * as serviceWorkerRegistration from "./serviceWorkerRegistration"




// // admin imports
// // import { MyUserForm } from "./components/MyUserForm"
// // import { Button } from "react-bootstrap"
// import NavbarAdmin from "./components/NavbarAdmin"
import ContentcontainerAdmin from "./components/ContentcontainerAdmin"
import CreateAccountAdmin from "./components/CreateAccountAdmin"
import FavoritesAdmin from "./components/FavoritesAdmin"
import IndexAdmin from "./components/IndexAdmin"
import LogoutAdmin from "./components/LogoutAdmin"
import SelectionAdmin from "./components/SelectionAdmin"
import AdminUserCRUD from "./components/AdminUserCRUD"
import SportCRUD from "./components/SportCRUD"
import CreateSport from "./components/CreateSport"

// theme component
import ThemeUser from "./components/ThemeUser"
import ThemeAdmin from "./components/ThemeAdmin"

// user imports
import ContactUser from "./components/ContactUser"
// import NavbarUser from "./components/NavbarUser"
import CreateAccountUser from "./components/CreateAccountUser"
import FavoritesUser from "./components/FavoritesUser"
import ContentListUser from "./components/ContentListUser"
import IndexUser from "./components/IndexUser"
import SportFilter from "./components/SportFilter"
import InjuryFilter from "./components/InjuryFilter"
import HelpPage from "./components/HelpPage"

import LogoutUser from "./components/LogoutUser"

// import images
// import BackArrow from "./images/BackArrow.svg"
// import Climbing from "./images/climbing.svg"
// import PhysioContent from "./../public/PhysioContent.svg"
// import Skateboard from "./images/skateboard.svg"
// import SoarLogo from "./images/SoarLogo.svg"
// import Surf from "./images/surf.svg"
// import BodyDiagram from "./images/BodyDiagram.svg"

// css imports
import "../src/css/style.scss"
import "../src/css/Contact-Form-Clean.css"
import "../src/css/Login-Form-Clean.css"
import "../src/css/Navigation-Clean.css"
import "../src/css/Pretty-Registration-Form.css"
import "../src/css/styles.css"
import "../src/css/bootstrap.min.css"


//js imports
// import "bootstrap/dist/js/bootstrap.min.js"

import "bootstrap/dist/css/bootstrap.min.css"
import Login from "./components/Login"
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/App';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import { BrowserRouter, Routes, Route } from "react-router-dom"
// import { CookiesProvider } from "react-cookie";

// const appElement = document.getElementById("app")
// ReactDOM.render(<App />, appElement)
const root = ReactDOM.createRoot(document.getElementById("App"))




root.render(
   <React.StrictMode>
      <BrowserRouter>
         <Routes>
            <Route path="*" element={<App />} />
            <Route path="/IndexUser" element={<IndexUser />} />
               <Route path="/SportFilter" element={<SportFilter />} />
               <Route path="/InjuryFilter" element={<InjuryFilter />} />
               <Route path="/ContentListUser" element={<ContentListUser />} />
               <Route path="/ContactUser" element={<ContactUser />} />
               <Route path="/FavoritesUser" element={<FavoritesUser />} />
               <Route path="/ThemeUser" element={<ThemeUser />} />
               <Route path="/LogoutUser" element={<LogoutUser />} />
               <Route path="/CreateAccountUser" element={<CreateAccountUser />} />
               <Route path="/HelpPage" element={<HelpPage />} />

               <Route path="/SportCRUD" element={<SportCRUD />} />
               <Route path="/AdminUserCRUD" element={<AdminUserCRUD />} />
               <Route path="/IndexAdmin" element={<IndexAdmin />} />
               <Route path="/SelectionAdmin" element={<SelectionAdmin />} />
               <Route path="/ContentcontainerAdmin" element={<ContentcontainerAdmin />} />
               <Route path="/FavoritesAdmin" element={<FavoritesAdmin />} />
               <Route path="/LogoutAdmin" element={<LogoutAdmin />} />
               <Route path="/ThemeAdmin" element={<ThemeAdmin />} />
               <Route path="/CreateAccountAdmin" element={<CreateAccountAdmin />} />
               <Route path="/CreateSport" element={<CreateSport/>} />
         </Routes>
      </BrowserRouter>
   </React.StrictMode>
)

serviceWorkerRegistration.register()
