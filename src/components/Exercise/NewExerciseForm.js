import React from 'react';
import Container from '../common/Container';
import Form from '../common/Form';
import InlineInputContainer from '../common/InlineInputContainer';
import Input from '../common/Input';
import Button from '../common/Button';

const NewExerciseForm = ({onSubmit, onChange, exercise}) => {
  // const {onSubmit, onChange, newUser} = props

  const handleChange = (e) => {
    onChange(e.target.id, e.target.value);
  }

  return (
    <Container>
      <Form onSubmit={onSubmit} style={{marginTop: '1em'}}>
        <InlineInputContainer>
          <Input
            name="name" 
            id="name" 
            value={exercise.name}
            placeholder={"Name"}
            onChange={handleChange}
            required
          />
          <Input
            name="weight" 
            id="weight" 
            value={exercise.weight}
            placeholder={"Weight in Lbs"}
            onChange={handleChange}
            type="number"
          />
        </InlineInputContainer>
        <InlineInputContainer>
          <Input
            name="expectedReps"
            id="expectedReps"
            value={exercise.expectedReps}
            placeholder={"Reps"}
            onChange={handleChange}
            type="number"
            required
          />
        </InlineInputContainer>
        <InlineInputContainer>
          <Input
            name="restTime"
            id="restTime"
            value={exercise.restTime}
            placeholder={"Rest Time (in Seconds)"}
            onChange={handleChange}
            type="number"
            required
          />
        </InlineInputContainer>
        <Button>Submit</Button>
      </Form>
    </Container>
  )
}

export default NewExerciseForm;