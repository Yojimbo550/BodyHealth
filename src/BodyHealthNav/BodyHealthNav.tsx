import React, { useState } from 'react'
import TheNavigation from '../TheNavigation/TheNavigation'
import { useNavigate } from 'react-router-dom'
import ThePushups from '../ThePushups/ThePushups'

const BodyHealthNav = () => {
     const [introduction,setIntroduction]  = useState(<div>The Big Six is a set of exercises to make you truly strong. We are not chasing impressive muscles, we are supporters ofdiscipline, healthy joints and a strong body.</div>)
    const [visibility, setVisibility] = useState(true)
    
     
        
    const navigate = useNavigate()   
        
    
    
    const openPushups = ()  => {
       
        // setIntroduction("ffff")
        
        setIntroduction(<ThePushups></ThePushups> )
             
        
           
       
         
         
         
        
    }
  return (
    <div>
            {/* <TheNavigation></TheNavigation> */}
            <div className="navigation1">
                <button  onClick={openPushups}>Push-ups</button>
                {/* <Link  
                onClick={openPushups}  
                to="/pushups"
                
                >
                    Push-ups</Link> */}
                <div>Squats</div>
                <div>Pull-ups</div>
                <div>Press</div>
                
                
                
            </div>
            {introduction}
            
            
            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/-NQB6CZdo2I?si=lALP9XdJ2ZikvfJf" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}
        </div>
  )
}

export default BodyHealthNav