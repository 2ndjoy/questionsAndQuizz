import React, { createContext, useState } from 'react';
import { CheckIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import '../Courses/Courses.css';
import './Course.css';
import Button from './Button';
export const CorrectAnsContext = createContext();


const Course = ({ ques }) => {
    const { options, question, correctAnswer } = ques;
    const [open, setOpen] = useState(false);


    // console.log(ques);
    return (
        <CorrectAnsContext.Provider value={correctAnswer}>

            <div className='mb-4 mt-4'>
                <div className='bg-purple-400'>
                    <div className='d-flex justify-center bg-purple-700 text-slate-200'>
                        <h6>{question}</h6>
                        <div onClick={() => setOpen(!open)} className="h-6 w-6 text-dark mt-1 ml-3" >
                            {
                                open ? <EyeSlashIcon /> : <EyeIcon />
                            }
                        </div>


                    </div>
                    <div className='bg-purple-400 mt-2 ans-container'>
                        {
                            options.map(option => <Button
                                option={option}></Button>)
                        }
                    </div>
                    {

                        open ? <p className='mt-2 bg-green-400'>Correct Answer is: <b> {correctAnswer}</b></p> : <p></p>

                    }

                </div>

            </div>
        </CorrectAnsContext.Provider>
    );
};

export default Course;