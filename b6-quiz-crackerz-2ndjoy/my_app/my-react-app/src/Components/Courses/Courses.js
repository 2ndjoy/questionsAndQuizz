import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import './Courses.css';

const Courses = () => {
    const quizz = useLoaderData();
    const { questions, name } = quizz.data;

    return (
        <div>
            <h2>Question about {name}</h2>
            {
                questions.map(ques => <Course
                    key={ques.id}
                    ques={ques}></Course>)
            }
        </div>
    );
};

export default Courses;
