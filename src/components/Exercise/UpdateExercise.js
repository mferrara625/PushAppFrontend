import React, {useState, useContext} from "react";
import Container from "../common/Container";
import Splash from "../common/Splash";
import addExerciseSplash from "../../assets/addExerciseSplash.jpg";
import axios from "axios";
import { apiHostUrl } from "../../config";
import { AuthContext } from "../Providers/AuthProvider";
import SimpleNewExerciseForm from "./SimpleNewExerciseForm";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UpdateExercise = (props) => {
    const location = useLocation()
    const {from} = location.state
    const [exercise, setExercise] = useState({
        name: "",
        weight: "",
        expectedReps: "",
        restTime: ""
        })

    const [auth] = useContext(AuthContext);
    let navigate = useNavigate();
        
    const updateForm = (field, value) => {
        setExercise({
            ...exercise,
            [field]: value
        })
    }

    const onSubmit = () => {
        const data = exercise;
        createNewExercise(data);
    };

    const createNewExercise = async (data) => {
        try{
            const res = await axios.put(`${apiHostUrl}/api/exercises/${from}`, data, {
                headers : {
                Authorization: `Bearer ${auth.token}`
            }
        });
            
            console.log(res.data);
            navigate("/exercises")
        } catch (err) {
            console.error(err.message);
        }
       

    }


    return (
        <Container>
            <Splash image={addExerciseSplash} style={{
                height: "20vh",
                color: "#F1F1F1",
                textShadow: '1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000',
                textAlign: 'center'}}>
            <h1>Update Exercise</h1>
            </Splash>
            <SimpleNewExerciseForm
                exercise={exercise}
                onChange={updateForm}
                onSubmit={onSubmit}
            />
        </Container>
    )
}

export default UpdateExercise;