import React from "react"
// import axios from "axios"
import PhysioContent from "../images/PhysioContent.jpg"
import NavbarUser from "./NavbarUser"
import { Spinner } from "react-bootstrap"
import { useState, useEffect } from "react"


// axios.defaults.withCredentials = true




export default function ContentListUser(injuryType) {
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState(null)
   const [content, setContent] = useState([])
   // const [injuryType, setInjuryType] = useState({})
   
   console.log(injuryType.injuryType)
   // const filteredInjury = item.filter((i) => {
   //    return i.injury.includes(injuryType)
   // })
   // console.log(filteredInjury)
   
   useEffect(() => {
      // axios
      // .get("https://soar-backend.herokuapp.com/api/content")        
      //  .then((response) => {
      //       console.log(1, response)
      //       // console.log(1, response.data[0])
      //       setContent(response.data)
      //       console.log(response)
      //    })
      //    .catch(function (error) {
      //       // handle error
      //       console.log(error)
      //    })

      var requestOptions = {
         method: 'GET',
         // headers: myHeaders,
         
         // // redirect: 'follow'
         credentials: "include",
      }


         fetch("https://soar-backend.herokuapp.com/api/content", requestOptions)
   //   console.log(requestOptions, data)
         .then((response) => {
            if (response.status == 200) {
               console.log(1, response)
                  // console.log(1, response.data[0])
                  console.log(response)
                  return response.json()
            }
         }).then((json) => {
            console.log(3, json)
            setContent(json)

         })
         .catch(function (error) {
            // handle error
            console.log(error)
         })

      //    alert("Success! You have updated a user")
      //    // setOpenModal(true)
      //    window.location.href = "AdminUserCRUD"
      //    return
      // }
   // })
   // .catch((e) => {
   //    // console.log(bodyContent);
   //    console.log(e)
   //    alert("Sorry, something isn't right")
   //    //return;
   // })
   }, [])
   console.log(2, content)
   const filterContent = content.filter(item => {
      return item.injury == injuryType.injuryType
   })
   console.log(filterContent)

   // let object;

   // for (let i of content) {
   //    console.log(5, i)
   //    object = i.filter(item => {
   //       return item.injury == injuryType
   //    })
   // }

   // console.log(6, object)
  

   return (
      <div>
         <NavbarUser />
         {loading && <Spinner animation="border" />}
         
         {/* {content &&
                  content.filter(content => content.includes(injuryType).map(injuryType => {injuryType}
                     // console.log(item.injury)
                  )
                  )} */}
                  

         {filterContent &&
                  filterContent.map(item => (
                     <div class="card">
                        <div className="card-body" id="contentCard" key={item.ID}>
                           
                           <img id="physioImage" src={item.file_data} height={40} />
                           <h4 className="card-title">Injury: {item.injury}</h4>
                           <p className="card-text">File Name: {item.file_name}</p>
                           <button className="btn btn-primary" id="favoritesButton" type="button">
                              Add to favorites
                           </button>

                         
                        </div>
                     </div>
                  )) }
         
         
      </div>
   )
}
