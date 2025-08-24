
import { useState } from 'react'
import './pushupslvl.scss'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
// import { setTaskArray } from '../store/slice';
interface propsLvl  {
    
    src:string,
    level:number,
    sets:number[],
    reps:number[],
}

    


const PushupsLvl = (props:propsLvl) => {
    
    const [showButton,setShowButton]  = useState(false);
    const taskArray = useSelector((state: RootState) => state.task);
    const dispatch = useDispatch<AppDispatch>();
    const handleClick = () => {
        setShowButton(true)
        // dispatch(setExercises("1 set of 10"))
    }

    return (
        <div className="lvlSection">
            
                <div><img width="550px" src={props.src}/></div>
                <div>
            <div className='standardSection'>
                Level Progress
                <div className='taskSection'>
                    <div >
                        <div>Beginner Standard</div>
                        <span>{props.sets[0]} set of {props.reps[0]}</span>
                    </div>
                    <div>
                        <button  onClick={handleClick}>Start task</button>
                    </div>
                    
                </div>
                <div className='taskSection'>
                    <div >
                        <div>Intermediatee Standard</div>
                        <span>{props.sets[1]} set of {props.reps[1]}</span>
                    </div>
                    <div>
                        <button onClick={handleClick}>Start task</button>
                    </div>
                    
                </div>
                <div className='taskSection'>
                    <div >
                        <div>Progression Standard</div>
                        <span>{props.sets[2]} set of {props.reps[2]}</span>
                    </div>
                    <div>
                        <button  onClick={handleClick}>Start task</button>
                    </div>
                    
                </div>
                
                    
                
                    
                
            </div>
        
            
        </div>
        </div>
    )
}
export default PushupsLvl