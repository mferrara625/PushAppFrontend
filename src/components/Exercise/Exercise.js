import React from 'react';
import BorderCard from "../common/BorderCard";
import Container from '../common/Container';
import Form from '../common/Form';
import { useState } from 'react';
import InlineInputContainer from '../common/InlineInputContainer';
import Input from '../common/Input';
import NavButton from '../NavBar/NavButton';
import { Link, useNavigate } from 'react-router-dom';
import ExerciseSet from './ExerciseSet';

const Exercise = (props) => {
    const { id, name, onSubmit, sets, displayButtons, completed } = props.exercise;

    const navigate = useNavigate();


    console.log(props.exercise);

    const handleChange = (e) => {
        props.onChange(e.target.id, e.target.value);
    }

    const onSelect = () => {
        props.onSelect(id);
    }

    const onSetSelect = (id) => {
        navigate(`/sets/${id}`);
    }

    const displaySets = () => {
        console.log(sets);

        return sets.map(set => {
            console.log(set.id);
            return <ExerciseSet onSelect={onSetSelect} set={set}/>
        })

    }

    return (
        <div style={{ display: 'initial' }}>

            <BorderCard onClick={onSelect} style={{ flexDirection: "column", alignItems: "center", textAlign: 'center' }}>
                <h2>{name}</h2>

            </BorderCard>

            {completed == true ?
                <p>
                    {displaySets()}
                </p>
                :
                " "
            }


            {displayButtons == true ?

                <div style={{ flexDirection: "row", alignItems: "center", marginLeft: '4em' }}>



                    <Link state={{ from: id }} to={`/updateExercise/${id}`} label='Update'>Update</Link> &nbsp; <Link state={{ from: id }} to={`/deleteExercise`} label='Update'>Delete</Link>

                </div>
                :
                ""
            }
        </div>
    )
}

export default Exercise;