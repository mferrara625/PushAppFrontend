import React, {useState, useContext, useEffect} from "react";
import axios from "axios";
import Container from "../common/Container";
import Splash from "../common/Splash";
import RegSplash from "../../assets/regSplash.jpg";
import { AuthContext } from "../Providers/AuthProvider";
import { apiHostUrl } from "../../config";
import BorderCard from "../common/BorderCard";
import { useNavigate } from "react-router-dom";
import Exercise from "./Exercise";
import UpdateExerciseForm from "./UpdateExerciseForm";

const ViewExercises = (props) => {

    const [auth] = useContext(AuthContext);
    const navigate = useNavigate();

    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () =>{
            console.log("AUTH_ID_TEST: " + auth.id)

        try{
            const {data: response} = await axios.get(`${apiHostUrl}/api/exercises/u/${auth.id}`, {
                headers : {
                Authorization: `Bearer ${auth.token}`
            }
        });
            
            setData(response);
            console.log(response);
            
        } catch (error) {
            console.error(error.message);
        }
        }
        fetchData();
    }, []);

    const displayExercises = () => {
        console.log(data);

        return data.map(dat => {
            dat.displayButtons = true;
            console.log(dat.id);
            return <Exercise exercise = {dat} key = {dat.id} onSelect={onSelect}/>
        })

    }

    const onSelect = (id) => {
        navigate(`/exercises/${id}`);
    }

    return (
        <Container>
            <Splash image={RegSplash} style={{
                height: "25vh",
                color: "#F1F1F1",
                textShadow: '1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000',
                textAlign: 'center',
                backgroundAttachment: 'fixed'}}>
                    <br/>
            <h1>Exercises</h1>
            </Splash>
            { data == null ?
                <p>LOADING...</p>
                :
                displayExercises()
            }
        </Container>
    )

}

export default ViewExercises;