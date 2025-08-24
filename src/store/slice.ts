
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Level = {
  level: number;      // уровень сложности (1..10)
  reps: number[];         // количество повторений на этом уровне
  sets:number[]
  restSec:number
  
  
};

type ExerciseName = "squats" | "pushups";

type Exercise = {
  id: number;
  name: ExerciseName;
  image:string[]
  levels: Level[];        // 10 уровней сложности
  completed?: boolean;
  notes?: string;
};


  
// };
const initialState: Exercise[] = [
  {
    id: 1,
    name: "pushups",
    image: [
      "assets/pushups/pushLvl1.PNG",
      "assets/pushups/pushLvl2.PNG",
      "assets/pushups/pushLvl3.PNG",
      "assets/pushups/pushLvl4.PNG",
      "assets/pushups/pushLvl5.PNG",
      "assets/pushups/pushLvl6.PNG",
      "assets/pushups/pushLvl7.PNG",
      "assets/pushups/pushLvl8.PNG",
      "assets/pushups/pushLvl9.PNG",
      "assets/pushups/pushLvl10.PNG",

    ],
    levels: [
      { level: 1, reps: [10, 25, 50], sets: [1, 2, 3], restSec: 60 },
      { level: 2, reps: [10, 20, 40], sets: [1, 2, 3], restSec: 60 },
      { level: 3, reps: [10, 15, 30], sets: [1, 2, 3], restSec: 60 },
      { level: 4, reps: [8, 12, 25], sets: [1, 2, 3], restSec: 60 },
      { level: 5, reps: [5, 10, 20], sets: [1, 2, 2], restSec: 60 },
      { level: 6, reps: [5, 10, 20], sets: [1, 2, 2], restSec: 60 },
      { level: 7, reps: [5, 10, 20], sets: [1, 2, 2], restSec: 60 },
      { level: 8, reps: [5, 10, 20], sets: [1, 2, 2], restSec: 60 },
      { level: 9, reps: [5, 10, 20], sets: [1, 2, 2], restSec: 60 },
      { level: 10, reps: [5, 10, 100], sets: [1, 2, 1], restSec: 60 }
    ]
  },
  {
    id: 2,
    name: "squats",
    image: [
      "assets/pushups/pushLvl1.PNG",
      "assets/pushups/pushLvl1.PNG",
      "D:/ProjectsVS/AnatomyHealth/assets/squats/squatsLvl3.PNG",
      "D:/ProjectsVS/AnatomyHealth/assets/squats/squatsLvl4.PNG",
      "D:/ProjectsVS/AnatomyHealth/assets/squats/squatsLvl5.PNG",
      "D:/ProjectsVS/AnatomyHealth/assets/squats/squatsLvl6.PNG",
      "D:/ProjectsVS/AnatomyHealth/assets/squats/squatsLvl7.PNG",
      "D:/ProjectsVS/AnatomyHealth/assets/squats/squatsLvl8.PNG",
      "D:/ProjectsVS/AnatomyHealth/assets/squats/squatsLvl9.PNG",
      "D:/ProjectsVS/AnatomyHealth/assets/squats/squatsLvl10.PNG",
    ],
    levels: [
      { level: 1, reps: [10, 25, 50], sets: [1, 2, 3], restSec: 60 },
      { level: 2, reps: [10, 20, 40], sets: [1, 2, 3], restSec: 60 },
      { level: 3, reps: [10, 15, 30], sets: [1, 2, 3], restSec: 60 },
      { level: 4, reps: [8, 12, 25], sets: [1, 2, 3], restSec: 60 },
      { level: 5, reps: [5, 10, 20], sets: [1, 2, 2], restSec: 60 },
      { level: 6, reps: [5, 10, 20], sets: [1, 2, 2], restSec: 60 },
      { level: 7, reps: [5, 10, 20], sets: [1, 2, 2], restSec: 60 },
      { level: 8, reps: [5, 10, 20], sets: [1, 2, 2], restSec: 60 },
      { level: 9, reps: [5, 10, 20], sets: [1, 2, 2], restSec: 60 },
      { level: 10, reps: [5, 10, 100], sets: [1, 2, 1], restSec: 60 }
    ]
  }
];
type ExercisesState = Exercise[];

export const taskSlice  = createSlice({
  name: 'task',
  initialState,
  reducers: {
setExercises(state, action: PayloadAction<ExercisesState>) {
  state = action.payload
      return state;
    },
    
    
  },
});

export const { setExercises} = taskSlice.actions;
export default taskSlice.reducer;