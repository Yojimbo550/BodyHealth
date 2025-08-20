import { Link, useNavigate } from "react-router-dom"
import TheNavigation from "../TheNavigation/TheNavigation"
import "./theBodyHealth.scss"

import BodyHealthNav from "../BodyHealthNav/BodyHealthNav"
import { setValue } from "../store/slice"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store/store"


const TheBodyHealth = () => {
    
   const value = useSelector((state: RootState) => state.someFeature.value);
  

  const dispatch = useDispatch<AppDispatch>();

  
        
    
    return(
        <>
        <TheNavigation></TheNavigation>
        <BodyHealthNav></BodyHealthNav>
        <div>{value}</div>
        </>
        
    )
}

export default TheBodyHealth