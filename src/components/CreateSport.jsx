import React from "react"
import NavbarAdmin from "./NavbarAdmin"
import BodyDiagram from "../images/BodyDiagram.svg"
import HelpPage from "./HelpPage"
import { useFormik } from "formik"
import SportFilter from "./SportFilter"
import { Spinner } from "react-bootstrap"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

// import SportFilter from "/.SportFilter"




export default function createSport() {
  
  

 

  
   return (
    <div>
     <NavbarAdmin />
        
            <div className="createSport">
             <form action="submit">
                 <div className="add-sport-tittle">
                     <h1>add Sport</h1>
                 </div>
                 <div className="sport-input">
                        <input type="text" />
                 </div>
                 <div className="add-sport-button">
                     <button>
                         Create Sport
                     </button>

                 </div>

             </form>
               
            </div>
    </div>
         )
        
}
