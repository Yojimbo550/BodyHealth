
import { useState } from 'react'
import './pushupslvl.scss'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { setTaskArray } from '../store/slice';
interface propsLvl  {
    id: number,
    src:string
}

    


const PushupsLvl = (props:propsLvl) => {
    
    const [showButton,setShowButton]  = useState(false);
    const taskArray = useSelector((state: RootState) => state.someFeature.taskArray);
    const dispatch = useDispatch<AppDispatch>();
    const handleClick = () => {
        setShowButton(true)
        dispatch(setTaskArray("1 set of 10"))
    }

    return (
        <div className="lvlSection">
            
            {/* <div>{props.id}</div> */}
            
            {/* <div><img src="assets\pushups\pushLvl1.PNG"/></div> */}
            <div><img width="550px" src={props.src}/></div>
            <div className='standardSection'>
                Level Progress
                <div className='taskSection'>
                    <div >
                        <div>Beginner Standard</div>
                        <span>1 set of 10</span>
                    </div>
                    <div>
                        <button  onClick={handleClick}>Start task</button>
                    </div>
                    
                </div>
                <div className='taskSection'>
                    <div >
                        <div>Intermediatee Standard</div>
                        <span>2 set of 20</span>
                    </div>
                    <div>
                        <button onClick={handleClick}>Start task</button>
                    </div>
                    
                </div>
                <div className='taskSection'>
                    <div >
                        <div>Beginner Standard</div>
                        <span>3 set of 30</span>
                    </div>
                    <div>
                        <button  onClick={handleClick}>Start task</button>
                    </div>
                    
                </div>
                
                    
                
                    
                
            </div>
            
        </div>
        
    )
}
export default PushupsLvl