import React, { useEffect, useState } from "react";


const Workout = (props) => {

    const {id, exercises, user } = props.workout;


    const [workoutLog, setWorkoutLog] = useState([]);

    const getWorkoutLog = async () => {
        try{
            const res = await axios.get(`${apiHostUrl}/api/workoutLog/${auth.id}`, {
                headers : {
                Authorization: `Bearer ${auth.token}`
            }
        });
            
            console.log(res.data);
            setWorkoutLog(res.data);
            alert("Success!");
        } catch (err) {
            console.error(err.message);
        }
       

    }

    const displayExercises = () => {
        console.log(workoutLog);

        return workoutLog.map(workout => {
            // workout.displayButtons = true;
            console.log(dat.id);
            return <Exercise exercise = {dat} key = {dat.id} onSelect={onSelect}/>
        })

    }

    useEffect(() =>{
        getWorkoutLog();

    }, [])
    return(
        <div>Workout</div>
    )
}

export default Workout;