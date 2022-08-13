import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from '../Home/Home';
import NavBar from '../NavBar/NavBar';
import Register from '../Auth/Register';
import Login from '../Auth/Login';
import AddExercise from '../Exercise/AddExercise';
import ViewExercises from '../Exercise/ViewExercises';
import ExerciseProfile from '../Exercise/ExerciseProfile';
import UpdateExercise from '../Exercise/UpdateExercise';
import DeleteExercise from '../Exercise/DeleteExercise';
import ViewCompletedExercises from '../Exercise/ViewCompletedExercises';
import UpdateSets from '../Exercise/UpdateSets';
import Quote from '../Quotes/Quote';
import Test from '../Quotes/Test';

const AppRouter = () => {
    return (
        <div style={{width: "100%", flexDirection: 'column'}}>


        <NavBar/>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/signup" element={<Register />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/add_exercise" element={<AddExercise />} />
            <Route path="/exercises/:id" element={<ExerciseProfile/>} />
            <Route path="/exercises" element={<ViewExercises />} />
            <Route path="/addExercise" element={<AddExercise />} />
            <Route path="/updateExercise/:id" element={<UpdateExercise />} />
            <Route path="/deleteExercise" element={<DeleteExercise />} />
            <Route path="/workoutLog" element={<ViewCompletedExercises />} />
            <Route path="/sets/:id" element={<UpdateSets />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/test" element={<Test />} />










        </Routes>
        </div>                 
    )
}

export default AppRouter;