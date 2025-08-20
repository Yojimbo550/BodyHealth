import Calendar from "react-calendar"
import TheNavigation from "../TheNavigation/TheNavigation"
import "./theCalendar.scss"

import 'react-calendar/dist/Calendar.css' ;




    


// const currentDate = new Date()
// const handleClick = (date) => {
   

const TheCalendar = () => {
    // const dispatch = useDispatch();
    // const currentDate = useSelector((state:RootState) => state.date.currentDate)
    // const handleDayClick = (day: Date) => {
    //     // Обратите внимание, что `day` - это объект Date, приведите его к строке или нужному формату
    //     dispatch(setCurrentDate(day.toLocaleDateString())); // Предполагается, что `setCurrentDate` - это экшен для обновления состояния текущей даты
    //     console.log(store.getState())
    
    return(

        <div>
            <TheNavigation></TheNavigation>
            
            <div>{}</div>

            <Calendar 
                
            >               
            </Calendar>
            <button>create task</button>
            {/* <div className="blue">{currentDate?.toString()}</div> */}
            
        </div>
    ) 
}

export default TheCalendar