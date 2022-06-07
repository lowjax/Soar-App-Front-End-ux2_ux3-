import React from "react"
import NavbarUser from "./NavbarUser"

export default function FavoritesUser() {
   return (
      <div>
         <NavbarUser />
         <div id="contentContainer">
            <div className="card-group">
               <div className="card">
                  <div className="card-body" id="contentCard">
                
                     <h1 className="card-title">Need Help?</h1>
                     <p className="card-text">
                        dont know how to use the app? lets walk through it together. After logging in, select the body part which you have injured. 
                        once you have selected the body part, please select the sport in which you have injured yourself. 
                        After selecting the Sport please select the type of injury you have aquired. after all of those Have selectd you will see content releting to you selection criteria.
                        Enjoy!
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
