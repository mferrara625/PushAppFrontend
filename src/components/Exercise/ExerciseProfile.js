import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import Container from "../common/Container";
import Splash from "../common/Splash";
import ExProfileSplash from "../../assets/exProfileSplash.jpg";
import { AuthContext } from "../Providers/AuthProvider";
import { apiHostUrl } from "../../config";
import BorderCard from "../common/BorderCard";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Button from "../common/Button";
import NavButton from "../NavBar/NavButton";
import Exercise from "./Exercise";
import RepForm from "./RepForm";
import UpdateExerciseForm from "./UpdateExerciseForm";
import Quote from "../Quotes/Quote";
import Timer from "../Timer/Timer";

const ExerciseProfile = (props) => {

    const [auth] = useContext(AuthContext);
    const params = useParams();
    const [exercise, setExercise] = useState({
        id: params.id
    })
    const [setInfo, setSetInfo] = useState([]);
    const [exerciseInfo, setExerciseInfo] = useState({
        weight: null,
        reps: null
    })
    const [setString, setSetString] = useState([]);
    const [exerciseObject, setExerciseObject] = useState({
        name: "",
        sets: []
    })
    const [idArray, setIdArray] = useState([params.id])
    const [resetTimer, setResetTimer] = useState(false);

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
      );

    const navigate = useNavigate();


    const updateForm = (field, value) => {
        setExerciseInfo({
            ...exerciseInfo,
            [field]: value
        })
    }

    const convertSetInfo = () => {
        console.log(setInfo)
        let tempArray = []
        setInfo.map((set, index) => {
            createSet(set);
        })
        // setSetString([tempArray]);
        // console.log("did set string work: " + setString);
        // createExerciseObject();
        console.log("TEST SET CREATION WITH LIST");
        addSetInfoToExercise(idArray);
    }

    const createSet = async (data) => {

        try{
            const res = await axios.post(`${apiHostUrl}/api/sets`, data, {
                headers : {
                Authorization: `Bearer ${auth.token}`
            }
        });
            
            console.log("ADDEDSETTEST " + res.data.id);
            setIdArray([...idArray, res.data.id])
        } catch (err) {
            console.error(err.message);
        }

    }

    const onSubmit = () => {
       
        setResetTimer(true);

        createSet(exerciseInfo);
        console.log("DATA.NAME TEST: " + data.name)
        setSetInfo([...setInfo, exerciseInfo]);
        console.log("EXERCISE INFO: " + exerciseInfo);
        console.log("setINFO: " + setInfo);


    }

    const createExerciseObject = () => {
        setExerciseObject({name: data.name, sets: setInfo});
        addSetInfoToExercise();


    }

    

    const addSetInfoToExercise =  async () => {
        // const data = (setInfo.map(set=>{
        //     "Weight: " + set.weight + " || " + "Reps: "+ set.reps
        // }))
        // console.log("TESTEXOBJECT:" + data.name + "||" + setInfo + "||" + setString); 

       
        // console.log("SetString test: " + setString +"----TEST EX Object!!: " + exerciseObject.name + " " + exerciseObject.sets);

        console.log("IDARRAYTEST" + idArray );
       

        try{
            const res = await axios.post(`${apiHostUrl}/api/exercises/completed/${auth.id}`, idArray, {
                headers : {
                Authorization: `Bearer ${auth.token}`
            }
        });
            
            console.log("Add Exercise Test: " + res.data.sets);
            // navigate("/exercises")
        } catch (err) {
            console.error(err.message);
        }
        navigate("/exercises");
        

    }


    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            console.log("test 1: " + params.id);
            try {
                const { data: response } = await axios.get(`${apiHostUrl}/api/exercises/${exercise.id}`, {
                    headers: {
                        Authorization: `Bearer ${auth.token}`
                    }
                });
                setData(response);
                console.log("res" + data.id);
                console.log("NAMETESTTT:"+ response.name)

            } catch (error) {
                console.error(error.message);
            }
        }
        fetchData();
        if(resetTimer){

            console.log("TIMER WAS RESET");
            async function resetResetTimer(){
                await delay(1000)
                setResetTimer(false);
                }
                resetResetTimer();
            

        }
    }, [resetTimer]);


    return (
        <Container>
            <Splash image={ExProfileSplash} style={{
                height: "20vh",
                color: "#F1F1F1",
                textShadow: '1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000',
                backgroundPosition: 'inherit' 
            }}>
                <Quote />
            </Splash>
            <Exercise exercise={data} />

            <Timer activateReset={resetTimer}/>


            <UpdateExerciseForm exerciseInfo={exerciseInfo} onChange={updateForm} onSubmit={onSubmit}></UpdateExerciseForm>

            <Container>
                {setInfo ? setInfo.map((set, index) => {
                    return (
                        <div>
                            <p>
                                WEIGHT: {set.weight} REPS: {set.reps}
                            </p>
                        </div>
                    );

                }) : " "}

            </Container>

            <Button onClick={addSetInfoToExercise}>Complete</Button>


        </Container>
    )

}

export default ExerciseProfile;