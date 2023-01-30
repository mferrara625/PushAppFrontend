import React, {useState, useContext} from "react";
import Container from "../common/Container";
import Splash from "../common/Splash";
import addExerciseSplash from "../../assets/addExerciseSplash.jpg";
import axios from "axios";
import { apiHostUrl } from "../../config";
import { AuthContext } from "../Providers/AuthProvider";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import UpdateExerciseForm from "./UpdateExerciseForm";

const UpdateSets = (props) => {
    const params = useParams();
    const [exercise, setExercise] = useState({
        weight: "",
        reps: ""
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
        updateSets(data);
    };

    const updateSets = async (data) => {
        console.log("PARAM TEST" + params + "||" + params.id)
        try{
            const res = await axios.put(`${apiHostUrl}/api/sets/${params.id}`, data, {
                headers : {
                Authorization: `Bearer ${auth.token}`
            }
        });
            
            console.log(res.data);
            navigate("/workoutLog")
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
            <h1>Update Set Info</h1>
            </Splash>
            <UpdateExerciseForm
                exerciseInfo={exercise}
                onChange={updateForm}
                onSubmit={onSubmit}
            />
        </Container>
    )
}

export default UpdateSets;