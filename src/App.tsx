import { useDispatch, useSelector } from "react-redux";
import TheNavigation from "./TheNavigation/TheNavigation"
import { AppDispatch, RootState } from "./store/store";

import BodyHealthBar from "./BodyHealthBar/BodyHealthBar";
import BodyHealthTasks from "./BodyHealthTasks/BodyHealthTasks";
import { useAppSelector } from "./store/redux";



// type  User = {
//   name:string
// }




// const users:User[] =[
//   {name:"alex"},
//   {name:"alex"},
//   {name:"alex"},
// ]


// let currentData:number = useState()

// const result = users.map((user) => (
//   <p key={user.name}>{user.name}</p>
// ))
const App = () => {

  const {} = useAppSelector(state => (state))
  // const value1 = useSelector((state: RootState) => state.someFeature.value);
  // const loading = useSelector((state: RootState) => state.someFeature.loading);
  // const data = useSelector((state: RootState) => state.someFeature.data);
  // const taskArray = useSelector((state: RootState) => state.slice);

  const dispatch = useDispatch<AppDispatch>();

  // const increase = () => dispatch(setValue(value1 + 1));

  
  return (
      <div>
        {/* {result} */}
        {/* {currentData} */}
        <TheNavigation></TheNavigation>
        <div>
          <BodyHealthBar></BodyHealthBar>
          <BodyHealthTasks></BodyHealthTasks>
        </div>
          
        
        {/* <button onClick={increase}></button> */}
        {/* <BodyHealthNav></BodyHealthNav> */}
        {/* <div>{value1}</div> */}
        {/* <div>{taskArray}</div> */}
      </div>
    
      
    
  )
}

export default App
