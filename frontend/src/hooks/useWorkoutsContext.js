import {WorkoutsContext} from '../context/WorkoutContext';
import { useContext } from 'react';

export const useWorkoutsContext = () => {
    const context = useContext(WorkoutsContext);

    if (!context) {
        throw Error("workout context must be inside workout context provider");
    }

    return context;
}