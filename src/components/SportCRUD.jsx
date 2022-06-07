import React from "react"
import NavbarAdmin from "./NavbarAdmin"
import SoarLogo from "../images/SoarLogo.svg"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Spinner } from "react-bootstrap"
import { useState, useEffect } from "react"
import axios from "axios"


export default function SportCRUD() {
        const [loading, setLoading] = useState(false)
        const [error, setError] = useState(null)
        const [sport, setSport] = useState([])
        
        
        const [desc, setDesc] = useState("")
        let data=({desc:desc})


        useEffect(() => {
      

            fetch("/api/sport", {
               method: "GET",
               credentials: "include"
            })
            .then((res) => res.json())
            .then((json) => {
               console.log(json)
               setSport(json)
            })
            .catch(function (error) {
               // handle error
               console.log(error)
            })




         }, [])
        
         var myHeaders = new Headers()
         myHeaders.append("Content-Type", "application/json","Access-Control-Allow-Origin", "*","")
        
         console.log(2, JSON.stringify(sport))

         //delete sport start 

         function deleteSport(sport) {
            console.log(sport)
            var requestOptions = {
               method: 'DELETE',
               // headers: myHeaders,
               headers: {
                  'Content-Type': "application/json"
               },
               body: JSON.stringify({sport: sport}),
               // // redirect: 'follow'
               credentials: "include",
            }
              fetch("api/sport/delete", requestOptions)
            //   console.log(requestOptions, data)
              .then((response) => {
               console.log(response)
               if (response.status == 200) {
                  console.log(response)
         
                  alert("Success! You have deleted a sport")
                  // setOpenModal(true)
                  window.location.href = "SportCRUD"
                  return
               }
            })
            .catch((e) => {
               // console.log(bodyContent);
               console.log(e)
               alert("Sorry, something isn't right")
               //return;
            })

         //delete sport end

         // update sport start
         var myHeaders = new Headers()
         myHeaders.append("Content-Type", "application/json","Access-Control-Allow-Origin", "*","")
   
         // var requestOptions = {
         //    method: 'delete',
         //    // // headers: myHeaders,
         //    body: value,
         //    // // redirect: 'follow'
         //    // credentials: "include",
         // }
      
   }
   function updateSport(desc, sport) {
   
      console.log(sport)
      var requestOptions = {
         method: 'PATCH',
         // headers: myHeaders,
         headers: {
            'Content-Type': "application/json"
         },
         body: JSON.stringify({desc: desc, sport: sport}),
        
         // // redirect: 'follow'
         credentials: "include",
      }
     
        fetch("/api/sport/update", requestOptions)
      //   console.log(requestOptions, data)
        .then((response) => {
         console.log(response)
         if (response.status == 200) {
            console.log(response)
   
            alert("Success! You have updated a sport")
            // setOpenModal(true)
            window.location.href = "SportCrud"
            return
         }
      })
      .catch((e) => {
         // console.log(bodyContent);
         console.log(e)
         alert("Sorry, something isn't right")
         //return;
      })
   }
         // update sport end

         




        
    return (
        <div>
            <NavbarAdmin />
            {loading && <Spinner animation="border" />}

{sport ?
         sport.map(item => (
            <div class="card">
               <div className="card-body" id="contentCard" key={item.sport}>
                  <form action="">
                      <h4>SPORT</h4>
                      <input type="text" name="" value={item.sport}/>
                      <input type="text" name="" value={item.desc}/>

                      {/* <button className="btn btn-primary" id="favoritesButton" type="button"
                      onClick={()=>{updateSport(desc.desc, sport.sport,)}}>
                        Update
                      </button> */}

                      <button className="btn btn-primary" id="favoritesButton" type="button"
                      onClick={()=>{updateSport(desc.desc,)}}>
                        Update
                      </button>

                      
                      <button type="button" className="btn btn-primary"
                      onClick={()=>{deleteSport(sport.sport)}}>
                         Delete

                      </button>


                      {/* <button className="btn btn-primary" id="favoritesButton" type="button"
                      onClick={()=>{deleteSport(sport.sport)}}
                      >
                         Delete
                      </button> */}
                  </form>
                 
                
               </div>
            </div>
         )) : null}

        </div>
     )
}