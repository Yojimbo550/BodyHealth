

import PushupsLvl from "../PushupsLvls/PushupsLvl"
import "./thePushups.scss"

import { RootState } from "../store/store";
import { useAppSelector } from "../store/redux";
import { useState } from "react";




const ThePushups = () => {

    const pushups = useAppSelector((state: RootState) => state.task);
   
    const [pushUpLvl,setPushUpLvl] = useState<React.ReactElement | undefined>()
    
        const handleClick = (event: { target: { id: any; }; }) => {
            let value = event.target.id
     console.log("ID нажатой кнопки:", pushups[0].levels[value]);
     setPushUpLvl(<PushupsLvl 
                        src={pushups[0].image[value]} 
                        level={pushups[0].levels[value].level}
                        sets={pushups[0].levels[value].sets}
                         reps={pushups[0].levels[value].reps}
                        
                        >

                        </PushupsLvl>)
    }
  
    return(
        

        
    <>
            
            
        
        
        <div className="pushupLvls">
            {/* {lvlsRender} */}
        <div className="pushupButtons">
            <button id={0} onClick={handleClick}>level 1</button>
            <button id={1} onClick={handleClick}>level 2</button>
            <button id={2} onClick={handleClick}>level 3</button>
            <button id={3} onClick={handleClick}>level 4</button>
            <button id={4} onClick={handleClick}>level 5</button>
            <button id={5} onClick={handleClick}>level 6</button>
            <button id={6} onClick={handleClick}>level 7</button>
            <button id={7} onClick={handleClick}>level 8</button>
            <button id={8} onClick={handleClick}>level 9</button>
            <button id={9} onClick={handleClick}>level 10</button>
        </div>
            
        <div>{pushUpLvl}</div>
         <div>
{/* {pushups.map(e => (
<div key="{e.id}">
{e.name} — {e.image?.[0]}
</div>
))} */}
</div>   
            
            
        </div>
        

    </>
    ) 
    

}

export default ThePushups