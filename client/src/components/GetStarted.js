import React, {useEffect} from 'react'

const GetStarted = () => {

    useEffect(()=> {
        document.getElementById("left-sidebar").classList.remove("home-display")
    })
  return (
    <div className="fade-in-component">GetStarted</div>
  )
}

export default GetStarted