import React, { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CorrectAnsContext } from './Course';

const Button = ({ option }) => {
    const correctAnswer = useContext(CorrectAnsContext);
    const getAns = (option) => {
        if (option == correctAnswer) {
            toast.success('Your answer is Correct', {
                position: "top-center",
                autoClose: 250,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "colored",
            });
        }
        else {
            toast.error("Your answer is Wrong", {
                position: "top-center",
                autoClose: 250,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "colored",
            });


        }
    };
    return (
        <div>

            <button onClick={() => getAns(option)} className='border-solid border-2 border-purple-900 p-2'>
                {option}
            </button>

            <div>
                <ToastContainer
                    position="top-center"
                    autoClose={300}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable={false}
                    theme="colored"
                />
            </div>
        </div>

    );
};

export default Button;