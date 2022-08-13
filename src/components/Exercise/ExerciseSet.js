import React from 'react'
import BorderCard from '../common/BorderCard';

const ExerciseSet = (props) => {
    const {id, weight, reps} = props.set;

    const onSelect = () => {
        props.onSelect(id);
    }      

    console.log(props.set);
  return (
    <BorderCard onClick={onSelect} style={{ flexDirection: "column", alignItems: "center", textAlign: 'center' }}>
        <p>{reps} reps @ {weight} LBS</p>
    </BorderCard>
  )
}

export default ExerciseSet