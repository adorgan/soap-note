import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'

const GetStarted = () => {

    useEffect(()=> {
        document.getElementById("left-sidebar").classList.remove("home-display")
    })
  return (
    <div className="fade-in-component get-started-container">
      <div className="get-started-header">
        Get Started
      </div>
      <div className="get-started-title">
        How do I use this site?
      </div>
      <div className="get-started-body">
        Let's face it, writing documentation during or after a treatment session can be difficult, tedious, and prone to spelling or grammatical errors. 
        Most therapy documentation consists of a blank text box with little guidance provided as to how best to structure the note, or even what to include.
        Now imagine that instead of writing a short novel for every treatment session, you can pick out the most salient details and have someone else
        convert it into a narrative that could be easily edited and tailored for that particular session. This is what SOAP Note Generator is all about.
      </div>

      <div className="get-started-body">
        Pick a treatment category and select values for every listed variable. Once all variables have a value, you can generate a custom narrative. Custom
        Narratives can either be copied for reference, or they can be saved to your <Link style={{color:"var(--accent)"}} to={"/login"}>profile</Link>. 
      </div>

      <div className="get-started-title">
        Isn't copying and pasting unethical?
      </div>
      <div className="get-started-body">
        SOAP Notes that are generated are a reference for how to structure treatment documentation. They should not be simply copied and pasted without customizing
        or editing to suit a particular purpose. Therapy documentation is a legal document, so make sure you proofread what you submit!
      </div>
    </div>
  )
}

export default GetStarted