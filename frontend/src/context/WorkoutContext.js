import { createContext } from "react";

export const WorkoutsContext = createContext();


export const workoutsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_WORKOUTS':
            return {
                workouts:action.payload
            }
            
        case 'CREATE_WORKOUTS':
            return {
                workouts:[action.payload,...state.workouts]
            }
    
        default:
            break;
    }
}


export const WorkoutsContextProvider = ({children}) => {
    return (
        <WorkoutsContextProvider>
            {children}
        </WorkoutsContextProvider>
    )
} 