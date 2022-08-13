import React, { useState } from 'react';
import Container from '../common/Container';
import Form from '../common/Form';
import InlineInputContainer from '../common/InlineInputContainer';
import Input from '../common/Input';
import Button from '../common/Button';

const UpdateExerciseForm = ({onSubmit, onChange, exerciseInfo}) => {
  // const {onSubmit, onChange, newUser} = props
  

  const handleChange = (e) => {
    onChange(e.target.id, e.target.value);
  }


  

  return (
    <Container style={{minHeight: "25vh"}}>
      <Form onSubmit={onSubmit} style={{marginTop: '1em'}}>
        <InlineInputContainer>
          <Input
            name="weight" 
            id="weight" 
            value={exerciseInfo.weight}
            placeholder={"Weight in Lbs"}
            onChange={handleChange}
            type="number"
          />
        </InlineInputContainer>
        <InlineInputContainer>
          <Input
            name="reps"
            id="reps"
            value={exerciseInfo.reps}
            placeholder={"Reps"}
            onChange={handleChange}
            type="number"
            required
          />
        </InlineInputContainer>
        <Button>Add Set</Button>
      </Form>
    </Container>
  )
}

export default UpdateExerciseForm;