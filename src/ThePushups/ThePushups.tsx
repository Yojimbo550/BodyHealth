
import TheBodyHealth from "../TheBodyHealth/TheBodyHealth"
import PushupsLvl from "../PushupsLvls/PushupsLvl"
import "./thePushups.scss"
import { useRef, useState } from "react"



// const lvls = [1,2,3,4,5,6,7,8,9,10]
// const lvlsRender = lvls.map((lvlNum) =>{
//     return(
//         <PushupsLvl lvlNum={"Level " + lvlNum.toString()}></PushupsLvl>
//     )
// }) 
const ThePushups = () => {
    const pushUpLvlsArray = [
          
           { id:1,src:"assets\pushups\pushLvl1.PNG"},
           { id:2,src:"assets\pushups\pushLvl2.PNG"},
           { id:3,src:"assets\pushups\pushLvl3.PNG"},
           { id:4,src:"assets\pushups\pushLvl4.PNG"},
           { id:5,src:"assets\pushups\pushLvl5.PNG"},
           { id:6,src:"assets\pushups\pushLvl6.PNG"},
           { id:7,src:"assets\pushups\pushLvl7.PNG"},
           { id:8,src:"assets\pushups\pushLvl8.PNG"},
           { id:9,src:"assets\pushups\pushLvl9.PNG"},
           { id:10,src:"assets\pushups\pushLvl10.PNG"}

  
        
    ]
    const [pushUpLvl,setPushUpLvl] = useState()
    // let openLvl = (id)=> {
    //         setPushUpLvl(
    //             <PushupsLvl src="assets\pushups\pushLvl1.PNG" lvlNum="Level 1"></PushupsLvl>
    //         )

    //     }
        const handleClick = (event) => {
            let value = event.target.id
    // console.log("ID нажатой кнопки:", event.target.id);
    setPushUpLvl(<PushupsLvl src={`assets/pushups/pushLvl${value}.PNG`} lvlNum="Level 1"></PushupsLvl>)
    
  };
    return(
        

        
    <>
            
            
        {/* assets\pushups\pushLvl1.PNG */}
        
        <div className="pushupLvls">
            {/* {lvlsRender} */}
        <div className="pushupButtons">
            <button id={1} onClick={handleClick}>level 1</button>
            <button id={2} onClick={handleClick}>level 2</button>
            <button id={3} onClick={handleClick}>level 3</button>
            <button id={4} onClick={handleClick}>level 4</button>
            <button id={5} onClick={handleClick}>level 5</button>
            <button id={6} onClick={handleClick}>level 6</button>
            <button id={7} onClick={handleClick}>level 7</button>
            <button id={8} onClick={handleClick}>level 8</button>
            <button id={9} onClick={handleClick}>level 9</button>
            <button id={10} onClick={handleClick}>level 10</button>
        </div>
            
        <div>{pushUpLvl}</div>
            
            {/* <PushupsLvl src="assets\pushups\pushLvl1.PNG" lvlNum="Level 1"></PushupsLvl>
            
            <PushupsLvl src="assets\pushups\pushLvl2.PNG" lvlNum="Level 2"></PushupsLvl>
            <PushupsLvl src="assets\pushups\pushLvl3.PNG" lvlNum="Level 3"></PushupsLvl>
            <PushupsLvl src="assets\pushups\pushLvl4.PNG" lvlNum="Level 4"></PushupsLvl>
            <PushupsLvl src="assets\pushups\pushLvl5.PNG" lvlNum="Level 5"></PushupsLvl>
            <PushupsLvl src="assets\pushups\pushLvl6.PNG" lvlNum="Level 6"></PushupsLvl>
            <PushupsLvl src="assets\pushups\pushLvl7.PNG" lvlNum="Level 7"></PushupsLvl>
            <PushupsLvl src="assets\pushups\pushLvl8.PNG" lvlNum="Level 8"></PushupsLvl>
            <PushupsLvl src="assets\pushups\pushLvl9.PNG" lvlNum="Level 9"></PushupsLvl>
            <PushupsLvl src="assets\pushups\pushLvl10.PNG" lvlNum="Level 10"></PushupsLvl> */}
            
        </div>
        

    </>
    ) 
    
    
}
export default ThePushups