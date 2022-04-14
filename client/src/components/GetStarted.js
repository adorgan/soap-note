import React, {useEffect} from 'react'

const GetStarted = () => {

    useEffect(()=> {
        document.getElementById("left-sidebar").style.display = "block";
    })
  return (
    <div>GetStarted</div>
  )
}

export default GetStarted