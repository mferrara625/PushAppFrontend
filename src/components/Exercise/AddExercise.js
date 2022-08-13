import React, {useState, useContext} from "react";
import Container from "../common/Container";
import Splash from "../common/Splash";
import addExerciseSplash from "../../assets/addExerciseSplash.jpg";
import axios from "axios";
import { apiHostUrl } from "../../config";
import NewExerciseForm from "./NewExerciseForm";
import { AuthContext } from "../Providers/AuthProvider";
import SimpleNewExerciseForm from "./SimpleNewExerciseForm";


const AddExercise = (props) => {
    const [exercise, setExercise] = useState({
        name: ""
        })

    const [auth] = useContext(AuthContext);

        
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
        console.log("AUTH_ID_TEST: " + auth.id)
        try{
            const res = await axios.post(`${apiHostUrl}/api/exercises/create/${auth.id}`, data, {
                headers : {
                Authorization: `Bearer ${auth.token}`
            }
        });
            
            console.log(res.data);
            alert("Success!");
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
            <h1>Add New Exercise</h1>
            </Splash>
            <SimpleNewExerciseForm
                exercise={exercise}
                onChange={updateForm}
                onSubmit={onSubmit}
            />
        </Container>
    )
}

export default AddExercise;