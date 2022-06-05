import React from "react"
import NavbarUser from "./NavbarUser"

export default function ContactUser() {
   return (
      <div>
         <NavbarUser />
         <div>
            <section className="contact-clean">
               <form >
                  <h2 className="text-center">Contact Us</h2>
                  <div className="mb-3">
                     <AiFillStar/>
                     <input className="form-control" 
                     type="text " 
                     pattern="[A-Za-z0-9\-_\.\@]{4,20}" title="email must have a subject" minlength="5"
                     required
                     // onChange={onChangeSubject}
                     // onSubmit={send}
                     placeholder="Subject" />
                  </div>
                  <div className="mb-3">
                  <MdEmail/>
                     <input className="form-control is-invalid" 
                     type="email" name="email" 
                     pattern="[A-Za-z0-9\-_\.\@]{4,20}" title="Four or more characters"
                     required
                     // onChange={onChangeEmail}
                     // onSubmit={send}
                     placeholder="Email" />
                     
                     {/* <small className="form-text text-danger">Please enter a correct email address.</small> */}
                  </div>
                  <div className="mb-3">
                     <AiFillMessage/>
                     <textarea className="form-control" 
                     name="message" 
                     placeholder="Message" 
                     pattern="[A-Za-z0-9\-_\.\@]{4,20}" title="message must not be empty" minlength="20"
                     required
                     // onChange={onChangeMessage}
                     // onSubmit={send}

                     rows="14"></textarea>
                  </div>
                  <div id="buttonDiv" className="mb-3">
                     <button className="btn btn-primary" 
                     id="submitButton" 
                     type="">
                        send{" "}
                     </button>
                  </div>
               </form>
            </section>
         </div>
      </div>
   )
}
