import React from 'react';
import Container from '../common/Container';
import Form from '../common/Form';
import InlineInputContainer from '../common/InlineInputContainer';
import Input from '../common/Input';
import Button from '../common/Button';

const SimpleNewExerciseForm = ({onSubmit, onChange, exercise}) => {

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
        </InlineInputContainer>
        <Button>Submit</Button>
      </Form>
    </Container>
  )
}

export default SimpleNewExerciseForm;