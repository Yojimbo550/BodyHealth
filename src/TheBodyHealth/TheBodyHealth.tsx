import { Link, useNavigate } from "react-router-dom"
import TheNavigation from "../TheNavigation/TheNavigation"
import "./theBodyHealth.scss"

import BodyHealthNav from "../BodyHealthNav/BodyHealthNav"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store/store"
import { useAppSelector } from "../store/redux"


const TheBodyHealth = () => {
    
//    const value = useSelector((state: RootState) => state.exercises.value);
  

//   const dispatch = useDispatch<AppDispatch>();

  const {} = useAppSelector(state => state.task)
        
    
    return(
        <>
        <TheNavigation></TheNavigation>
        <BodyHealthNav></BodyHealthNav>
        {/* <div>{value}</div> */}
        </>
        
    )
}

export default TheBodyHealth