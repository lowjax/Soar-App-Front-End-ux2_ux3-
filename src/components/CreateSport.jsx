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




export default function CreateSport() {
  
  
    const [sport, setSport] = useState("")

    // Change values based on event, the event being the form input
    const onChangeSport = (e) => {
       const sport = e.target.value
       setSport(sport)
    }
  

    function createSport(event) {
        event.preventDefault()
        var myHeaders = new Headers()
        myHeaders.append("Content-Type", "application/json")
  
        var requestOptions = {
           method: "POST",
           headers: myHeaders,
           body: JSON.stringify({ sport: sport }),
           // redirect: 'follow'
           credentials: "include",
        }

        fetch("https://soar-backend.herokuapp.com/api/sport/create", requestOptions)
        .then((response) => {
           if (response.status == 200) {
              console.log(response)
              alert("Success! You have now created a sport.")

              window.location.href = "CreateSport"
              return
           }
          
        })
        .catch((e) => {
            // console.log(bodyContent)
            console.log(e)
            alert("Sorry, something isn't right")
            return
         })
   }
  
   return (
    <div>
     <NavbarAdmin />
        
            <div className="createSport">
             <form action="submit">
                 <div className="add-sport-tittle">
                     <h1>add Sport</h1>
                 </div>
                 <div className="sport-input">
                        <input type="text" 
                        placeholder="sport"
                        pattern="[A-Za-z0-9\-_\.\@]{4,20} ^[^<>]+$" 
                        title="Four or more characters"
                        // required="[A-Za-z0-9\-_\.\@]{4,20} "
                        required
                        value={sport}
                        onChange={onChangeSport}
                        />
                 </div>
                 <div className="add-sport-button">
                     <button
                     className="btn btn-light submit-button"
                     type="button"
                     id="createSport"
                    
                     onClick={createSport}
                     >
                         Create Sport
                     </button>

                 </div>

             </form>
               
            </div>
    </div>
         )
        
}
