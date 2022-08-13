import React, { useEffect, useState } from "react";
import Button from "../common/Button";
import Container from "../common/Container";
import Form from "../common/Form";
import InlineInputContainer from "../common/InlineInputContainer";
import Input from "../common/Input";

const RepForm = (props) => {

    const{exercise} = props;

    console.log("exerciseCosoleLog"+exercise.sets)

    const [sets, setSets] = useState([{set: ''}]);


    const handleFormChange = (index, event) => {
        let data = [...sets];
        data[index][event.target.name] = event.target.value;
        setSets(data);
     }

    useEffect(() => {
        if(exercise.sets)
         calculateSets()

    },[exercise.sets]);

    const calculateSets = () => {
        let tempArray = [];
        for(let i = 0; i < exercise.sets; i++){
            tempArray.push({set:''});
        }
        setSets(tempArray)

    }

    const onSubmit = () => {
        console.log(sets)
    }
    

    return (
        <Container>
      <Form onSubmit={onSubmit} style={{marginTop: '1em'}}>
      {sets.map((input, index) => {
        let pholder = "Set " + (index + 1);
          return (
            <div key={index}>
              <Input
                key={index}
                name='set'
                placeholder= {pholder}
                value={input.set}
                onChange={event => handleFormChange(index, event)}
              />
            </div>
          )
        })}
        </Form>
        </Container>
    )
}

export default RepForm;