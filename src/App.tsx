import { useDispatch, useSelector } from "react-redux";
import TheNavigation from "./TheNavigation/TheNavigation"
import { AppDispatch, RootState } from "./store/store";
import { setValue } from "./store/slice";



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
  const value1 = useSelector((state: RootState) => state.someFeature.value);
  const loading = useSelector((state: RootState) => state.someFeature.loading);
  const data = useSelector((state: RootState) => state.someFeature.data);
  const taskArray = useSelector((state: RootState) => state.someFeature.taskArray);

  const dispatch = useDispatch<AppDispatch>();

  const increase = () => dispatch(setValue(value1 + 1));

  
  return (
      <div>
        {/* {result} */}
        {/* {currentData} */}
        <TheNavigation></TheNavigation>
        <TheBodySection>
          <BodyHealthBar></BodyHealthBar>
          <BodyHealthTasks></BodyHealthTasks>
        </TheBodySection>
        <button onClick={increase}></button>
        {/* <BodyHealthNav></BodyHealthNav> */}
        <div>{value1}</div>
        <div>{taskArray}</div>
      </div>
    
      
    
  )
}

export default App
