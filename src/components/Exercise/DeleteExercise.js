import React, {useState, useContext, useEffect} from "react";
import Container from "../common/Container";
import Splash from "../common/Splash";
import addExerciseSplash from "../../assets/addExerciseSplash.jpg";
import axios from "axios";
import { apiHostUrl } from "../../config";
import NewExerciseForm from "./NewExerciseForm";
import { AuthContext } from "../Providers/AuthProvider";
import SimpleNewExerciseForm from "./SimpleNewExerciseForm";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const DeleteExercise = (props) => {
    const location = useLocation()
    const {from} = location.state
    

    const [auth] = useContext(AuthContext);
    let navigate = useNavigate();
        
   useEffect(()=>{
    const id = from;
    deleteExercise(id);

   }, [])


    const deleteExercise = async (id) => {
        try{
            const res = await axios.delete(`${apiHostUrl}/api/exercises/${id}`, {
                headers : {
                Authorization: `Bearer ${auth.token}`
            }
        });
            
            console.log(res.data);
            setTimeout(() => console.log('Redirect Timeout'), 1000);
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
            <h2 style={{flexDirection: "column", alignItems: "center", textAlign: 'center'}}>Exercise Successfully Deleted</h2>
            <h3 style={{flexDirection: "column", alignItems: "center", textAlign: 'center'}}>Redirecting...</h3>
        </Container>
    )
}

export default DeleteExercise;